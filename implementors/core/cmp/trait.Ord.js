(function() {var implementors = {};
implementors['log'] = ["impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='log/enum.LogLevel.html' title='log::LogLevel'>LogLevel</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='log/enum.LogLevelFilter.html' title='log::LogLevelFilter'>LogLevelFilter</a>","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + ?<a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + ?<a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + ?<a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>",];implementors['nix'] = ["impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/fcntl/struct.OFlag.html' title='nix::fcntl::OFlag'>OFlag</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/fcntl/struct.FdFlag.html' title='nix::fcntl::FdFlag'>FdFlag</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/mount/struct.MsFlags.html' title='nix::mount::MsFlags'>MsFlags</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/mount/struct.MntFlags.html' title='nix::mount::MntFlags'>MntFlags</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/mqueue/struct.MQ_OFlag.html' title='nix::mqueue::MQ_OFlag'>MQ_OFlag</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/mqueue/struct.FdFlag.html' title='nix::mqueue::FdFlag'>FdFlag</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/epoll/struct.EpollEventKind.html' title='nix::sys::epoll::EpollEventKind'>EpollEventKind</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/ioctl/struct.IoctlDirFlags.html' title='nix::sys::ioctl::IoctlDirFlags'>IoctlDirFlags</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/signal/signal/struct.SockFlag.html' title='nix::sys::signal::signal::SockFlag'>SockFlag</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/socket/struct.SockFlag.html' title='nix::sys::socket::SockFlag'>SockFlag</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/stat/struct.SFlag.html' title='nix::sys::stat::SFlag'>SFlag</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/stat/struct.Mode.html' title='nix::sys::stat::Mode'>Mode</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/termios/struct.InputFlags.html' title='nix::sys::termios::InputFlags'>InputFlags</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/termios/struct.OutputFlags.html' title='nix::sys::termios::OutputFlags'>OutputFlags</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/termios/struct.ControlFlags.html' title='nix::sys::termios::ControlFlags'>ControlFlags</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/termios/struct.LocalFlags.html' title='nix::sys::termios::LocalFlags'>LocalFlags</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/wait/struct.WaitPidFlag.html' title='nix::sys::wait::WaitPidFlag'>WaitPidFlag</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/time/struct.TimeVal.html' title='nix::sys::time::TimeVal'>TimeVal</a>",];implementors['mio'] = ["impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec_map/struct.VecMap.html' title='collections::vec_map::VecMap'>VecMap</a>&lt;V&gt; <span class='where'>where V: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CString.html' title='std::ffi::c_str::CString'>CString</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CStr.html' title='std::ffi::c_str::CStr'>CStr</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsString.html' title='std::ffi::os_str::OsString'>OsString</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsStr.html' title='std::ffi::os_str::OsStr'>OsStr</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='http://doc.rust-lang.org/nightly/std/net/ip/enum.IpAddr.html' title='std::net::ip::IpAddr'>IpAddr</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='mio/struct.Ipv4Addr.html' title='mio::Ipv4Addr'>Ipv4Addr</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='mio/struct.Ipv6Addr.html' title='mio::Ipv6Addr'>Ipv6Addr</a>","impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='http://doc.rust-lang.org/nightly/std/path/enum.Prefix.html' title='std::path::Prefix'>Prefix</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/std/path/struct.PrefixComponent.html' title='std::path::PrefixComponent'>PrefixComponent</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='http://doc.rust-lang.org/nightly/std/path/enum.Component.html' title='std::path::Component'>Component</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/std/path/struct.Components.html' title='std::path::Components'>Components</a>&lt;'a&gt;","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/std/path/struct.Path.html' title='std::path::Path'>Path</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html' title='std::time::duration::Duration'>Duration</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/std/sys_common/wtf8/struct.CodePoint.html' title='std::sys_common::wtf8::CodePoint'>CodePoint</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/std/sys_common/wtf8/struct.Wtf8Buf.html' title='std::sys_common::wtf8::Wtf8Buf'>Wtf8Buf</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/std/sys_common/wtf8/struct.Wtf8.html' title='std::sys_common::wtf8::Wtf8'>Wtf8</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + ?<a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + ?<a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a, B&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='http://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='mio/struct.PollOpt.html' title='mio::PollOpt'>PollOpt</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='mio/struct.EventSet.html' title='mio::EventSet'>EventSet</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/fcntl/consts/struct.OFlag.html' title='nix::fcntl::consts::OFlag'>OFlag</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/fcntl/consts/struct.FdFlag.html' title='nix::fcntl::consts::FdFlag'>FdFlag</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/mount/struct.MsFlags.html' title='nix::mount::MsFlags'>MsFlags</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/mount/struct.MntFlags.html' title='nix::mount::MntFlags'>MntFlags</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/mqueue/consts/struct.MQ_OFlag.html' title='nix::mqueue::consts::MQ_OFlag'>MQ_OFlag</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/mqueue/consts/struct.FdFlag.html' title='nix::mqueue::consts::FdFlag'>FdFlag</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/epoll/struct.EpollEventKind.html' title='nix::sys::epoll::EpollEventKind'>EpollEventKind</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/ioctl/struct.IoctlDirFlags.html' title='nix::sys::ioctl::IoctlDirFlags'>IoctlDirFlags</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/signal/signal/struct.SockFlag.html' title='nix::sys::signal::signal::SockFlag'>SockFlag</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/socket/struct.SockFlag.html' title='nix::sys::socket::SockFlag'>SockFlag</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/stat/struct.SFlag.html' title='nix::sys::stat::SFlag'>SFlag</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/stat/struct.Mode.html' title='nix::sys::stat::Mode'>Mode</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/termios/ffi/consts/struct.InputFlags.html' title='nix::sys::termios::ffi::consts::InputFlags'>InputFlags</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/termios/ffi/consts/struct.OutputFlags.html' title='nix::sys::termios::ffi::consts::OutputFlags'>OutputFlags</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/termios/ffi/consts/struct.ControlFlags.html' title='nix::sys::termios::ffi::consts::ControlFlags'>ControlFlags</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/termios/ffi/consts/struct.LocalFlags.html' title='nix::sys::termios::ffi::consts::LocalFlags'>LocalFlags</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/wait/struct.WaitPidFlag.html' title='nix::sys::wait::WaitPidFlag'>WaitPidFlag</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='nix/sys/time/struct.TimeVal.html' title='nix::sys::time::TimeVal'>TimeVal</a>",];implementors['raft'] = ["impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='raft/struct.Term.html' title='raft::Term'>Term</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='raft/struct.LogIndex.html' title='raft::LogIndex'>LogIndex</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
