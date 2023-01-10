import "./App.css";
// import Pusher from "pusher-js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";
import NotFound from "./pages/404";
import React from "react";
import ProtectedRoute from "./components/protectedroute";

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
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
