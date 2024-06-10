import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import CardDetail from "./Pages/CardDetail";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";

// Admin Routes 
import  Home from "./admin/AdminHome";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/havenhub/car-detail" element={<CardDetail />} />
        <Route path="/admin" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
