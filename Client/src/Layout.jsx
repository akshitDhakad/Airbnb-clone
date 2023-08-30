import React from 'react'
import Navbar from './Pages/Navbar'
import Header from "./Pages/Header";

import Home from './Pages/Home';
// import Footer from "./Pages/Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <Header />
      <Home />
      {/* <Footer/> */}
    </div>
  );
}

export default Layout