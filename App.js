import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Windows95Desktop from "./components/Windows95Desktop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Windows95Desktop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;