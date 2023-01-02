import { useState } from "react";
import logo from '../assets/mnrtchatlogo.png'

function Chat() {
  const user = localStorage.getItem("user");

  return (
    <div className="chatwindow">
      <div className="container-fluid">
        <div className="row m-5">
          <div className="col">
            <img className="rounded" src={logo}  height="100px" width="200px"/>
          </div>
          <div className="col">
            <h1>Welcome {user}!</h1>
          </div>
          <div className="col">
            <button className="btn btn-danger btn-lg">Logout</button>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-2 border">
            <h4 className="my-3">Room list</h4>
           <button className="btn btn-lg btn-success my-3"> <i class="bi bi-plus-circle"></i></button>
            <p>Global</p>
            <p>Testing</p>
            <p>React</p>
          </div>
          <div className="col-8 border vh-100 overflow-auto">
            <h1 className="my-3">Room : Global</h1>

            <div>
              <h3 className="col-2 ms-auto">{user}</h3>
              <p className="ownBgText col-8 ms-auto p-2 ms-3 mb-1 rounded-3 ">
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
              <p className="otherBgText col-8 p-2  ms-3 mb-1 rounded-3 ">Hehehehe</p>
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
              <p className="otherBgText col-8 p-2  ms-3 mb-1 rounded-3 ">Hehehehe</p>
              <p className="otherBgText col-8 p-2  ms-3 mb-1 rounded-3 ">
                Testing the textboxes
              </p>
              <p className="col-2 ms-3 mb-3 rounded-3">23:58</p>
            </div>
            <div className="sticky-bottom position-relative card-footer text-muted d-flex justify-content-start align-items-center p-3">
              <input type="text" className="form-control"></input>
              <button className="btn btn-success ms-2">
                <i class="bi bi-send"></i>
              </button>
            </div>
          </div>

          <div className="col-2 border">
            <h4 className="my-3">Users online</h4>
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
}

export default Chat;
