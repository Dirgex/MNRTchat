import logo from "../assets/mnrtchatlogo.png";
import HandleMessage from "../components/handlemessage";
import HandleChatlog from "../components/handlechatlog";
import HandleOnlineUsers from "../components/handleonlineusers";
import { useSelector, useDispatch } from "react-redux";
import Pusher from "pusher-js";
import { useEffect } from "react";
import env from "react-dotenv";
import { setChatlog } from "../redux/chatlog";
import { setUserlist, deleteUserFromList, updateUserlistOnBack } from "../redux/username";

const Chat = () => {
  const { user } = useSelector((state) => state.username);
  const { userid } = useSelector((state) => state.username);
  const { chat } = useSelector((state) => state.chatlog);
  const { userlist } = useSelector((state) => state.username);
  //usercount if userlist doesnt  work
  //const { usercount } = useSelector((state) => state.username);
  const dispatch = useDispatch();

  useEffect(() => {
    const pusher = new Pusher(env.PUSHERKEY, {
      cluster: "eu",

      userAuthentication: {
        params: {
          userid : userid,
          user : user
        },
        endpoint: "http://localhost:3001/pusher/user-auth",
      },

      channelAuthorization: {
        endpoint: "http://localhost:3001/pusher/auth",
      },
    });


    Pusher.logToConsole = true;
    pusher.signin();



    const presence_global = pusher.subscribe("presence-globalroom");

    presence_global.bind("pusher:subscription_succeeded", ()=> {
      presence_global.members.each((member) => dispatch(setUserlist(member.info.user)))


    })

    presence_global.bind("pusher:member_added", (member) => {
     dispatch(setUserlist(member.info.user));

    });

    presence_global.bind("pusher:member_removed", (member) => {
      console.log(member.info.user);
      dispatch(deleteUserFromList(member.info.user));
    });

    presence_global.bind("message", function (data) {

      dispatch(setChatlog(data));
    });

    pusher.connection.bind('disconnected', () =>{
     dispatch(updateUserlistOnBack());
      pusher.unsubscribe("presence-globalroom");
      pusher.disconnect();
    })

    // const checkConnections = pusher.subscribe("check");
    // checkConnections.bind("connection", function(data){
    //    dispatch(getUserlist());
    //     console.log("is logged in: " + data)
    //     console.log(data)
    // })

    //working code for user count but its too easy.
    /*
    const pusherCheck = pusher.subscribe("pushercheck");
    pusherCheck.bind("pusher:subscription_count", function(data){
        console.log(data.subscription_count)
        dispatch(setUsercount(data.subscription_count))
        console.log(data)
    })
    */

    // globalRoom.bind("pusher:subscription_count", function (pusherdata) {
    //   console.log(pusherdata);
    //   console.log(pusherdata.subscription_count);
    // });

    return () => {
      pusher.unsubscribe("presence-globalroom");
      pusher.disconnect();

    };
  }, [dispatch,user,userid]);

  return (
    <div className="chatwindow">
      <div className="container-fluid ">
        <div className="row mt-3 text-center">
          <div className="col">
            <img
              className="rounded"
              alt="logo"
              src={logo}
              height="100px"
              width="200px"
            />
          </div>
          <div className="col">
            <h1>Welcome {user}!</h1>
          </div>
          <div className="col my-3">
            <button className="btn btn-success btn-lg">Logout</button>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-2 d-none d-sm-block border text-center">
            <h4 className="my-3">
              <u>Room list</u>
            </h4>
            <button className="btn btn-lg btn-success my-3">
              <i className="bi bi-plus-circle"></i>
            </button>
            <p>Global</p>
            <p>Testing</p>
            <p>React</p>

            <HandleOnlineUsers userlist={userlist} />
          </div>
          <div
            className="col-10 border overflow-auto"
            style={{ height: "550px" }}
          >
            <h1 className="my-3">Room : Global</h1>

            <HandleChatlog chat={chat} user={user} userlist={userlist} />
            <HandleMessage user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
