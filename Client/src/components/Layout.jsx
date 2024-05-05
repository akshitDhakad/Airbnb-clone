import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className='h-screen flex flex-col'>
      <Navbar />
      <main className='grow '>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout