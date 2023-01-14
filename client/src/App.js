import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";
import NotFound from "./pages/404";
import React from "react";
import ProtectedRoute from "./components/protectedroute";

function App() {

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
