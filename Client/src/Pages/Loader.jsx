import React from 'react'
import "./Loader.css";

function Loader() {
  return (
    <div className="screen">
      <div className="loader ">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div>
          <h1 className="text-4xl text-white font-bold">HavenHub</h1>
        </div>
      </div>
    </div>
  );
}

export default Loader