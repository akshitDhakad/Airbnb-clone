import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
function Page404() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-start">
        <Navbar />
      </div>
      <div className="flex-grow">
        {/* Your content goes here */}
        <div className="flex h-full justify-center items-center">
          <div className="font-semibold text-gray-600 text-6xl">
           ! Oops Page Not Found
          </div>
        </div>
      </div>
      <div className="flex-end">
        <Footer />
      </div>
    </div>
  );
}

export default Page404;