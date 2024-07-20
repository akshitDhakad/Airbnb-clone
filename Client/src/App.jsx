import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import CardDetail from "./Pages/CardDetail";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";

// Admin Routes 
import  Home from "./admin/AdminHome";
import AdminAddProduct from "./admin/AdminAddProduct";
import AdminEditProduct from "./admin/AdminEditProduct";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/havenhub/car-detail" element={<CardDetail />} />
        <Route path="/admin/home" element={<Home />} />
        <Route path="/admin/addProduct" element={<AdminAddProduct />} />
        <Route path="/admin/editProduct" element={<AdminEditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
