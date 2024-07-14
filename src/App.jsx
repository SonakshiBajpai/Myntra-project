// src/App.jsx
import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import CountdownTimer from "./CountdownTimer";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import IndianHandloom from "./IndianHandloom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./Quiz";
import Profile from "./Profile"; // Import the Profile component
import AnimalWellfare from "./AnimalWellfare";

import AudioPlayer from "./AudioPlayer"; // Import the AudioPlayer component

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="app">
        <Header />
        <AudioPlayer src="/Audio.mp3" /> {/* Add the AudioPlayer component */}
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <CountdownTimer />
                <Checkout />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/indianhandloom" element={<IndianHandloom />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/AnimalWellfare" element={<AnimalWellfare />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
