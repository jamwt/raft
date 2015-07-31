initSidebarItems({"enum":[["Error","The generic `raft::Error` is composed of one of the errors that can originate from the various libraries consumed by the library. With the exception of the `Raft` variant these are generated from `try!()` macros invoking on `io::Error` or `capnp::Error` by using `FromError`."],["RaftError","A Raft Error represents a Raft specific error that consuming code is expected to handle gracefully."]],"mod":[["messages_capnp",""],["persistent_log","The persistent storage of Raft state."],["state_machine","A `StateMachine` is a single instance of a distributed application. It is the `raft` libraries responsibility to take commands from the `Client` and apply them to each `StateMachine` instance in a globally consistent order."]],"struct":[["Client","The representation of a Client connection to the cluster."],["ClientId","The ID of a Raft client."],["LogIndex","The index of a log entry."],["Server","The `Server` is responsible for receiving events from remote `Server` or `Client` instances, as well as setting election and heartbeat timeouts.  When an event is received, it is applied to the local `Consensus`. The `Consensus` may optionally return a new event which must be dispatched to either the `Server` or `Client` which sent the original event, or to all `Server` instances."],["ServerId","The id of a Raft server. Must be unique among the participants in a consensus group."],["Term","The term of a log entry."]],"type":[["Result","A simple convienence type."]]});