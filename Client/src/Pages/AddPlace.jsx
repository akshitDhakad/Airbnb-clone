import React, { useState } from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Bookings from "./Bookings";
import Place from "./Places";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Login from "./Login";


function AddPlace() {
  const { isAuthenticated } = useAuth();
  const [selectedOption, setSelectedOption] = useState(1);
  function handleStyle(optionIndex) {
    let style = "flex items-center gap-3 bg-gray-200 px-10 py-2 rounded-2xl";
    if (selectedOption === optionIndex) {
      style += " bg-red-500 text-white";
    }
    return style;
  }

    const userIsAuthenticated = isAuthenticated();
    
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <div className="flex gap-10 justify-center my-10">
          <div className={handleStyle(1)} onClick={() => setSelectedOption(1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <span>Profile</span>
          </div>
          <div className={handleStyle(2)} onClick={() => setSelectedOption(2)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>

            <span>bookings</span>
          </div>
          <div className={handleStyle(3)} onClick={() => setSelectedOption(3)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
              />
            </svg>
            <span>My accommodations</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        
        {userIsAuthenticated ? (
          selectedOption === 1 ? (
            <Profile />
          ) : selectedOption === 2 ? (
            <Bookings />
          ) : (
            <Link
              to={"/place"}
              className="flex items-center gap-3 rounded-2xl px-10 py-2 bg-red-500 text-white"
            >
              <span className="text-2xl">+</span>
              <span>Add New Place</span>
            </Link>
          )
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
}

export default AddPlace;
