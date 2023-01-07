import logo from "../assets/mnrtchatlogo.png";
import HandleMessage from "../components/handlemessage";
import { useSelector } from "react-redux";


const Chat = () => {
  const { user } = useSelector((state) => state.username);


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
      <div className="container-fluid">
        <div className="row m-5">
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
          <div className="col">
            <button className="btn btn-success btn-lg">Logout</button>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-2 border">
            <h4 className="my-3 underline">
              <u>Room list</u>
            </h4>
            <button className="btn btn-lg btn-success my-3">
              <i className="bi bi-plus-circle"></i>
            </button>
            <p>Global</p>
            <p>Testing</p>
            <p>React</p>
          </div>
          <div className="col-8 border vh-100 overflow-auto">
            <h1 className="my-3">Room : Global</h1>

            <div>
              <h3 className="col-2 ms-auto">{user}</h3>
              <p className="ownBgText col-8 ms-auto p-2 ms-3 mb-1 rounded-3">
                Hi
              </p>
              <p className="ownBgText col-8 p-2 ms-auto ms-3 mb-1 rounded-3">
                Hehehehe
              </p>
              <p className="ownBgText col-8 p-2 ms-auto ms-3 mb-1 rounded-3">
                Testing the textboxes
              </p>
              <p className="col-2 ms-auto ms-3 mb-3 rounded-3">23:58</p>
            </div>

            <div>
              <h3 className="col-2">You</h3>
              <p className="otherBgText col-8 p-2 ms-3 mb-1 rounded-3 ">Hi</p>
              <p className="otherBgText col-8 p-2  ms-3 mb-1 rounded-3 ">
                Hehehehe
              </p>
              <p className="otherBgText col-8 p-2  ms-3 mb-1 rounded-3 ">
                Testing the textboxes
              </p>
              <p className="col-2 ms-3 mb-3 rounded-3">23:58</p>
            </div>

            <div>
              <h3 className="col-2 ms-auto">{user}</h3>
              <p className="ownBgText col-8 ms-auto p-2 ms-3 mb-1 rounded-3">
                Hi
              </p>
              <p className="ownBgText col-8 p-2 ms-auto ms-3 mb-1 rounded-3">
                Hehehehe
              </p>
              <p className="ownBgText col-8 p-2 ms-auto ms-3 mb-1 rounded-3">
                Testing the textboxes
              </p>
              <p className="col-2 ms-auto ms-3 mb-3 rounded-3">23:58</p>
            </div>

            <div>
              <h3 className="col-2">test</h3>
              <p className="otherBgText col-8 p-2 ms-3 mb-1 rounded-3 ">Hi</p>
              <p className="otherBgText col-8 p-2  ms-3 mb-1 rounded-3 ">
                Hehehehe
              </p>
              <p className="otherBgText col-8 p-2  ms-3 mb-1 rounded-3 ">
                Testing the textboxes
              </p>
              <p className="col-2 ms-3 mb-3 rounded-3">23:58</p>
            </div>
            <HandleMessage user={user}/>
          </div>

          <div className="col-2 border">
            <h4 className="my-3">
              <u>Users online</u>
            </h4>
            <ul>
              <li>{user}</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
