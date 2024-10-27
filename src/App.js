// src/App.js
import React from "react";
import Events from "./components/Events";
import JoinUs from "./components/JoinUs";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/join-us" element={<JoinUs />} />
      </Routes>
    </>
  );
}

export default App;
