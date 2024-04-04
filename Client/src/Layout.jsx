import React, { useState, useEffect } from "react";
import Navbar from './Pages/Navbar'
import Header from "./Pages/Header";
import Home from './Pages/Home';
import Filter from './Pages/Filter';
import Footer from "./Pages/Footer";
import axios from "axios";

function Layout() {
  const [filter, showFilter] = useState(false);
  const [products, setProducts] =useState([])
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/places?filter=${search}`)
      .then((res) => {
        const data = res.data;
        

        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);



  return (
    <div>
      {filter ? <Filter filter={filter} showFilter={showFilter} /> : ""}
      <Navbar setSearch={setSearch} />
      <Header filter={filter} showFilter={showFilter} setSearch={setSearch} />
      <Home product={products} />
      <Footer />
    </div>
  );
}

export default Layout