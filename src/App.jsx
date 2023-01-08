import { Home, Exercises, Program, Videos } from "./pages";
import Navbar from "./components/navbar";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* 🟡Features🟡
      1. Make responsive
      2. Add themes
      */}
    </div>
  );
}

export default App;
