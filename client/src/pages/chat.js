import logo from "../assets/mnrtchatlogo.png";
import HandleMessage from "../components/handlemessage";
import HandleChatlog from "../components/handlechatlog";
import HandleOnlineUsers from "../components/handleonlineusers";
import { useSelector, useDispatch } from "react-redux";
import Pusher from "pusher-js";
import { useEffect } from "react";
import env from "react-dotenv";
import { setChatlog } from "../redux/chatlog";
import {
  setUserlist,
  deleteUserFromList,
  updateUserlistOnBack,
} from "../redux/username";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const { user } = useSelector((state) => state.username);
  const { userid } = useSelector((state) => state.username);
  const { chat } = useSelector((state) => state.chatlog);
  const { userlist } = useSelector((state) => state.username);
  const navigate = useNavigate();
  //usercount if userlist doesnt  work
  //const { usercount } = useSelector((state) => state.username);
  const dispatch = useDispatch();

  useEffect(() => {
    const pusher = new Pusher(env.PUSHERKEY, {
      cluster: "eu",

      userAuthentication: {
        params: {
          userid: userid,
          user: user,
        },
        endpoint: "http://localhost:3001/pusher/user-auth",
      },

      channelAuthorization: {
        params: {
          userid: userid,
          user: user,
        },
        endpoint: "http://localhost:3001/pusher/auth",
      },
    });

    Pusher.logToConsole = true;
    pusher.signin();

    const presence_global = pusher.subscribe("presence-globalroom");


    presence_global.bind("pusher:subscription_succeeded", () => {
      presence_global.members.each((member) =>
        dispatch(setUserlist(member.info.user))
      );
    });

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

    pusher.connection.bind("disconnected", () => {
      dispatch(updateUserlistOnBack());
      pusher.unsubscribe("presence-globalroom");
      pusher.disconnect();
    });

    presence_global.bind("pusher:subscription_error", () =>{
      navigate(-1);
      alert("User already exists in chat");
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
  }, [dispatch, user, userid,navigate]);

  return (
    <div className="chatwindow">
      <div className="container-fluid ">
        <div className="row mt-3 text-center">
          <div className="col">
            <img
              className="col-12 col-md-4 img-fluid rounded"
              alt="logo"
              src={logo}
            />
          </div>
          <div className="col col-md-4 my-3">
            <h3>Welcome {user}!</h3>
          </div>
          <div className="col my-3">
            <button onClick={()=> navigate(-1)}className="btn btn-success btn-lg">Logout</button>
          </div>
        </div>
        <div className="row m-3">
          <div className="sm-block col-md-2 border border-success rounded text-center">


            <HandleOnlineUsers userlist={userlist} />
          </div>
          <div
            className="col border border-success rounded overflow-auto"
            style={{ height: "550px" }}
          >
            <HandleChatlog chat={chat} user={user} userlist={userlist} />
            <HandleMessage user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
