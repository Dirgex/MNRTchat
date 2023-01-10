import logo from "../assets/mnrtchatlogo.png";
import HandleMessage from "../components/handlemessage";
import HandleChatlog from "../components/handlechatlog";
import { useSelector, useDispatch } from "react-redux";
import Pusher from "pusher-js";
import { useEffect } from "react";
import env from "react-dotenv";
import { setChatlog } from "../redux/chatlog";

const Chat = () => {
  const { user } = useSelector((state) => state.username);
  const { chat } = useSelector((state) => state.chatlog);
  const dispatch = useDispatch();

  useEffect(() => {
    const pusher = new Pusher(env.PUSHERKEY, {
      cluster: "eu",
    });
    const globalRoom = pusher.subscribe("global_room");
    globalRoom.bind("message", function (data) {
      console.log(data);
      //console.log(data.subscription_count);
      dispatch(setChatlog(data));
    });

    // globalRoom.bind("pusher:subscription_count", function (pusherdata) {
    //   console.log(pusherdata);
    //   console.log(pusherdata.subscription_count);
    // });

    return () => {
      pusher.unsubscribe("global_room");
      console.log("hej");
    };
  }, [dispatch]);

  //   const [chatlog, setChatlog] = useState([]);
  //   const [room, setRoom] = useState([]);

  //   const textChange = (e) => {
  //     setMessage(e.target.value);
  //     if (e.keyCode === 13 ){
  //         setMessage(e.target.value);
  //         console.log(e.target.value);
  //         e.preventDefault();
  //     }
  //   }

  //   const sendButton = (e) => {
  //     console.log(message);
  //     e.preventDefault();
  //   }

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
            <h4 className="my-3 underline">
              <u>Room list</u>
            </h4>
            <button className="btn btn-lg btn-success my-3">
              <i className="bi bi-plus-circle"></i>
            </button>
            <p>Global</p>
            <p>Testing</p>
            <p>React</p>

              <h4 className="my-3">
                <u>Users online</u>
              </h4>
            <p>{console.log()}</p>

          </div>
          <div className="col-10 border overflow-auto" style= {{height: "550px"}}>
            <h1 className="my-3">Room : Global</h1>
            <HandleChatlog chat={chat}
            user={user} />
            <HandleMessage user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
