import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import CardDetail from "./Pages/CardDetail";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/havenhub/car-detail" element={<CardDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
