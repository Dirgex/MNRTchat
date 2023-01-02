import "./App.css";
import Pusher from "pusher-js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Chat from "./pages/chat.js";
import NotFound from "./pages/404.js";
import React from 'react';



function App() {
  /*
  Pusher.logToConsole = true;

  const pusher = new Pusher("96f23e17a31c2ce9d24d", {
    cluster: "eu",
  });

  var channel = pusher.subscribe("my-channel");

  channel.bind("my-event", function (data) {
    alert(JSON.stringify(data));
    console.log(data);
  });

  */

  return (

    <div className="App">
      <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
    </div>

  );
}

export const usernameContext = React.createContext(
  "test"
)

export default App;
