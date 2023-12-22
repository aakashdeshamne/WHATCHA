// App.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";

const headerBarStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px",
  textAlign: "center",
};

function App() {
  return (
    <div>
      <header style={headerBarStyle}>
        <h1>WHATCHA</h1>
      </header>
      <Routes>
        <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
      </Routes>
    </div>
  );
}

export default App;
