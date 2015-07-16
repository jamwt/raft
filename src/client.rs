//! The `Client` allows users of the `raft` library to connect to remote `Server` instances and
//! issue commands to be applied to the `StateMachine`.

use std::collections::HashSet;
use std::io::Write;
use std::net::SocketAddr;
use std::net::TcpStream;
use std::fmt;

use bufstream::BufStream;
use capnp::{serialize, MessageReader, ReaderOptions};

use messages_capnp::{client_response, proposal_response};
use messages;
use ClientId;
use Result;
use RaftError;

/// The representation of a Client connection to the cluster.
pub struct Client {
    /// The `Uuid` of the client, should be unique in the cluster.
    pub id: ClientId,
    /// The current connection to the current leader.
    /// If it is none it may mean that there is no estabished leader or that there has been
    /// a disconnection.
    leader_connection: Option<BufStream<TcpStream>>,
    /// A lookup for the cluster's nodes.
    cluster: HashSet<SocketAddr>,
}

impl Client {

    /// Creates a new client.
    pub fn new(cluster: HashSet<SocketAddr>) -> Client {
        Client {
            id: ClientId::new(),
            leader_connection: None,
            cluster: cluster,
        }
    }

    /// Proposes an entry to be appended to the replicated log. This will only
    /// return once the entry has been durably committed.
    /// Returns `Error` when the entire cluster has an unknown leader. Try proposing again later.
    pub fn propose(&mut self, entry: &[u8]) -> Result<()> {
        scoped_trace!("{:?}: propose", self);
        let mut message = messages::proposal_request(entry);

        let mut members = self.cluster.iter().cloned();

        loop {
            let mut connection = match self.leader_connection.take() {
                Some(cxn) => {
                    scoped_debug!("had existing connection {:?}", cxn.get_ref().peer_addr());
                    cxn
                },
                None => {
                    let leader = try!(members.next().ok_or(RaftError::LeaderSearchExhausted));
                    scoped_debug!("connecting to potential leader {}", leader);
                    // Send the preamble.
                    let preamble = messages::client_connection_preamble(self.id);
                    let mut stream = BufStream::new(try!(TcpStream::connect(leader)));
                    try!(serialize::write_message(&mut stream, &*preamble));
                    stream
                }
            };
            try!(serialize::write_message(&mut connection, &mut message));
            try!(connection.flush());
            let response = try!(serialize::read_message(&mut connection, ReaderOptions::new()));
            match try!(response.get_root::<client_response::Reader>()).which().unwrap() {
                client_response::Which::Proposal(Ok(response)) => {
                    match response.which().unwrap() {
                        proposal_response::Which::Success(()) => {
                            scoped_debug!("recieved response Success");
                            self.leader_connection = Some(connection);
                            return Ok(())
                        },
                        proposal_response::Which::UnknownLeader(()) => {
                            scoped_debug!("recieved response UnknownLeader");
                            ()
                        },
                        proposal_response::Which::NotLeader(leader) => {
                            scoped_debug!("recieved response NotLeader");
                            let mut connection: TcpStream = try!(TcpStream::connect(try!(leader)));
                            let preamble = messages::client_connection_preamble(self.id);
                            try!(serialize::write_message(&mut connection, &*preamble));
                            self.leader_connection = Some(BufStream::new(connection));
                        }
                    }
                },
                _ => panic!("Unexpected message type"), // TODO: return a proper error
            }
        }
    }
}

impl fmt::Debug for Client {
    fn fmt(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
        write!(fmt, "Client")
    }
}


#[cfg(test)]
mod test {
    extern crate env_logger;
    use Client;
    use uuid::Uuid;
    use std::net::{SocketAddr, TcpListener};
    use std::collections::HashSet;
    use std::str::FromStr;
    use std::thread;
    use std::io::{Read, Write};
    use capnp::{serialize, ReaderOptions};
    use capnp::message::MessageReader;
    use messages;
    use messages_capnp::{connection_preamble, client_request};

    #[test]
    fn test_proposal_standalone() {
        setup_test!("test_proposal_standalone");
        let mut cluster = HashSet::new();
        let test_server = TcpListener::bind(SocketAddr::from_str("127.0.0.1:0").unwrap()).unwrap();
        let test_addr = test_server.local_addr().unwrap();
        cluster.insert(test_addr);

        // TODO: Test if the second server is not in the set.
        let second_server = TcpListener::bind(SocketAddr::from_str("127.0.0.1:0").unwrap()).unwrap();
        let second_addr = second_server.local_addr().unwrap();
        // cluster.insert(second_addr);

        let mut client = Client::new(cluster);
        let client_id = client.id.0.clone();
        let to_propose = b"Bears";

        // The client connects on the first proposal.
        // Wait for it.
        let child = thread::spawn(move || {
            let (mut connection, _)  = test_server.accept().unwrap();

            // First proposal should be fine, no errors.
            scoped_debug!("Should get preamble and proposal. Responds Success");

            // Expect Preamble.
            let message = serialize::read_message(&mut connection, ReaderOptions::new()).unwrap();
            let preamble = message.get_root::<connection_preamble::Reader>().unwrap();
            // Test to make sure preamble has the right id.
            if let connection_preamble::id::Which::Client(Ok(id)) = preamble.get_id().which().unwrap() {
                scoped_debug!("got preamble");
                assert_eq!(Uuid::from_bytes(id).unwrap(), client_id);
            } else { panic!("Invalid preamble."); }

            // Expect first proposal! (success!)
            let message = serialize::read_message(&mut connection, ReaderOptions::new()).unwrap();
            let request = message.get_root::<client_request::Reader>().unwrap();
            // Test to make sure request has the right value.
            if let client_request::Which::Proposal(Ok(proposal)) = request.which().unwrap() {
                scoped_debug!("got proposal");
                assert_eq!(proposal.get_entry().unwrap(), to_propose);
            } else { panic!("Invalid request."); }

            // Send first response! (success!)
            let response = messages::proposal_response_success();
            serialize::write_message(&mut connection, &*response).unwrap();
            connection.flush();

            // Second proposal should report unknown leader, and have the client return error.
            scoped_debug!("Should get proposal. Responds UnknownLeader");

            // Expect proposal! (unknown leader!)
            let message = serialize::read_message(&mut connection, ReaderOptions::new()).unwrap();
            let request = message.get_root::<client_request::Reader>().unwrap();
            // Test to make sure request has the right value.
            if let client_request::Which::Proposal(Ok(proposal)) = request.which().unwrap() {
                scoped_debug!("got proposal");
                assert_eq!(proposal.get_entry().unwrap(), to_propose);
            } else { panic!("Invalid request."); }

            // Send response! (unknown leader!) Client should drop connection.
            let response = messages::proposal_response_unknown_leader();
            serialize::write_message(&mut connection, &*response).unwrap();
            connection.flush();

            let (mut connection, _)  = test_server.accept().unwrap();
            serialize::write_message(&mut connection, &*response).unwrap();
            connection.flush();

            // Third Proposal should report NotLeader. Client should choose the server we direct it to.
            scoped_debug!("Should get preamble and proposal. Responds NotLeader.");
            let (mut connection, _)  = test_server.accept().unwrap();

            // Expect Preamble.
            let message = serialize::read_message(&mut connection, ReaderOptions::new()).unwrap();
            let preamble = message.get_root::<connection_preamble::Reader>().unwrap();
            // Test to make sure preamble has the right id.
            if let connection_preamble::id::Which::Client(Ok(id)) = preamble.get_id().which().unwrap() {
                scoped_debug!("got third preamble");
                assert_eq!(Uuid::from_bytes(id).unwrap(), client_id);
            } else { panic!("Invalid preamble."); }

            // Expect proposal! (not leader!)
            let message = serialize::read_message(&mut connection, ReaderOptions::new()).unwrap();
            let request = message.get_root::<client_request::Reader>().unwrap();
            // Test to make sure request has the right value.
            if let client_request::Which::Proposal(Ok(proposal)) = request.which().unwrap() {
                scoped_debug!("got second proposal");
                assert_eq!(proposal.get_entry().unwrap(), to_propose);
            } else { panic!("Invalid request."); }

            // Send response! (not leader!)
            let response = messages::proposal_response_not_leader(&format!("{}", second_addr));
            serialize::write_message(&mut connection, &*response).unwrap();
            connection.flush();

            // Test that it seeks out other server and proposes.
            scoped_debug!("Second server should get preamble and proposal. Responds Success.");

            // Accept on the second server.
            let (mut connection, _)  = second_server.accept().unwrap();
            // Expect Preamble.
            let message = serialize::read_message(&mut connection, ReaderOptions::new()).unwrap();
            let preamble = message.get_root::<connection_preamble::Reader>().unwrap();
            // Test to make sure preamble has the right id.
            if let connection_preamble::id::Which::Client(Ok(id)) = preamble.get_id().which().unwrap() {
                scoped_debug!("got fourth preamble");
                assert_eq!(Uuid::from_bytes(id).unwrap(), client_id);
            } else { panic!("Invalid preamble."); }

            // Expect proposal! (again!)
            let message = serialize::read_message(&mut connection, ReaderOptions::new()).unwrap();
            let request = message.get_root::<client_request::Reader>().unwrap();
            // Test to make sure request has the right value.
            if let client_request::Which::Proposal(Ok(proposal)) = request.which().unwrap() {
                scoped_debug!("got third proposal");
                assert_eq!(proposal.get_entry().unwrap(), to_propose);
            } else { panic!("Invalid request."); }

            // Send final response! (Success!)
            let response = messages::proposal_response_success();
            serialize::write_message(&mut connection, &*response).unwrap();

        });
        // Propose. It's a marriage made in heaven! :)
        // Should be ok
        scoped_debug!("first starting");
        client.propose(to_propose).unwrap();
        assert!(client.leader_connection.is_some());
        scoped_debug!("first done");
        // Should be err
        scoped_debug!("second starting");
        assert!(client.propose(to_propose).is_err());
        scoped_debug!("second done");
        // Should be ok, change leader connection.
        scoped_debug!("third starting");
        client.propose(to_propose).unwrap();
        assert!(client.leader_connection.is_some());
        scoped_debug!("third done");

        child.join().unwrap();
    }
}
