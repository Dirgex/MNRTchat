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

  //Selectors used to get data from the store
  //Dispatch used to use the actions or thunks
  const { user } = useSelector((state) => state.username);
  const { userid } = useSelector((state) => state.username);
  const { chat } = useSelector((state) => state.chatlog);
  const { userlist } = useSelector((state) => state.username);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {

    //Bunch of Pusher stuff like hooking into when someone is connected or leaving
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

    presence_global.bind("pusher:subscription_error", () => {
      navigate(-1);
      alert("User already exists in chat or something else went wrong");
    });

    return () => {
      pusher.unsubscribe("presence-globalroom");
      pusher.disconnect();
    };
  }, [dispatch, user, userid, navigate]);

  return (
    <div className="chatwindow">
      <div className="container-fluid ">
        <div className="row mt-3 mx-5">
          <div className="col">
            <img
              className="col-12 col-sm-4 col-md-3 col-lg-2 rounded"
              alt="logo"
              src={logo}
              width="50%"
            />
          </div>

          <div className="col my-3 d-flex justify-content-end">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-success btn-lg"
            >
              Logout
            </button>
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
            <div className="text-center my-3 text-success">
              <h3>Welcome {user}!</h3>
            </div>
            <HandleChatlog chat={chat} user={user} userlist={userlist} />
            <HandleMessage user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
