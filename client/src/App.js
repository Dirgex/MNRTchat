import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pusher from "pusher-js";

function App() {

  Pusher.logToConsole = true;

  const pusher = new Pusher('96f23e17a31c2ce9d24d', {
    cluster: "eu",
  });

  var channel = pusher.subscribe("my-channel");

  channel.bind("my-event", function (data) {
    alert(JSON.stringify(data));
    console.log(data);
  });



  return (
    <div className="App">
      <header className="App-header">
        <h2>Enter your username</h2>
        <form action="#">
        <div className="input-group">
        <input type="text" className="form-control"></input>
        <button className="btn btn-lg btn-success">Submit</button>
        </div>
        </form>
      </header>
    </div>
  );
}

export default App;
