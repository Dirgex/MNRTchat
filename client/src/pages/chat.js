import { useState } from "react";

function Chat() {
  const user = localStorage.getItem("user");

  return (
    <div className="chatwindow">
      <div className="container-fluid">
        <div className="row m-5">
          <div className="col">
            <h2 className="text-danger">Here be logo</h2>
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
            <h4 className="my-3">Room list</h4>
            <button className="btn btn-info my-3 underline">New room</button>
                <p>Global</p>
                <p>Testing</p>
                <p>React</p>
          </div>
          <div id="scrollDiv" className="col-8 border vh-100">
            <h1 className="my-3">Room : Global</h1>

            <div>
              <h3 className="col-2 ms-auto">{user}</h3>
              <p className="col-8 ms-auto p-2 ms-3 mb-1 rounded-3 bg-info">
                Hi
              </p>
              <p className="col-8 p-2 ms-auto ms-3 mb-1 rounded-3 bg-info">
                Hehehehe
              </p>
              <p className="col-8 p-2 ms-auto ms-3 mb-1 rounded-3 bg-info">
                Testing the textboxes
              </p>
              <p className="col-2 ms-auto ms-3 mb-3 rounded-3">23:58</p>
            </div>

            <div>
              <h3 className="col-2">test</h3>
              <p className="col-8 p-2 ms-3 mb-1 rounded-3 bg-info">Hi</p>
              <p className="col-8 p-2  ms-3 mb-1 rounded-3 bg-info">Hehehehe</p>
              <p className="col-8 p-2  ms-3 mb-1 rounded-3 bg-info">
                Testing the textboxes
              </p>
              <p className="col-2 ms-3 mb-3 rounded-3">23:58</p>
            </div>


            <div>
              <h3 className="col-2 ms-auto">{user}</h3>
              <p className="col-8 ms-auto p-2 ms-3 mb-1 rounded-3 bg-info">
                Hi
              </p>
              <p className="col-8 p-2 ms-auto ms-3 mb-1 rounded-3 bg-info">
                Hehehehe
              </p>
              <p className="col-8 p-2 ms-auto ms-3 mb-1 rounded-3 bg-info">
                Testing the textboxes
              </p>
              <p className="col-2 ms-auto ms-3 mb-3 rounded-3">23:58</p>
            </div>

            <div>
              <h3 className="col-2">test</h3>
              <p className="col-8 p-2 ms-3 mb-1 rounded-3 bg-info">Hi</p>
              <p className="col-8 p-2  ms-3 mb-1 rounded-3 bg-info">Hehehehe</p>
              <p className="col-8 p-2  ms-3 mb-1 rounded-3 bg-info">
                Testing the textboxes
              </p>
              <p className="col-2 ms-3 mb-3 rounded-3">23:58</p>
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
