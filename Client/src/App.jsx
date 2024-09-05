import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import CardDetail from "./Pages/CardDetail";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Error from "./pages/Error";
// Host Routes 
import HostSignup from "./admin/HostSignup";

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
        <Route path="/host/signup" element={<HostSignup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
