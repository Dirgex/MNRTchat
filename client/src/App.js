import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pusher from "pusher-js";

function App() {

  Pusher.logToConsole = true;

  const pusher = new Pusher('96f23e17a31c2ce9d24d"', {
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
        <h1>Pusher Test</h1>
        <p>
          Try publishing an event to channel <code>my-channel</code>
          with event name <code>my-event</code>.
        </p>
      </header>
    </div>
  );
}

export default App;
