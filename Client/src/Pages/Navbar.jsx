import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Navbar({ setSearch }) {
  const { user, isAuthenticated } = useAuth();
  const [searchBtn, setSearchBtn] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  function handleSearch(e) {
    const inputValue = (e.target.value);
    setSearchValue(inputValue);
    const searchValue = [
      "Villa",
      "Hotel",
      "Resort",
      "Apartment",
      "House",
      "Room",
      "Cottage",
      "Bungalow",
      "Cabin",
      "Chalet",
      "Mansion",
      "Motel",
      "Inn",
      "Hostel",
      "Lodge",
      "Camping",
      "Guesthouse",
      "Farmhouse",
      "Cave",
      "Treehouse",
      "Boat",
      "Yurt",
      "Plane",
      "Camper",
      "Tent",
      "Igloo",
      "Hut",
      "Earth House",
      "Tipi",
      "Train",
      "Tower",
      "Windmill",
      "Lighthouse",
      "Bus",
      "Casa Particular",
      "Casa particular",
      "Casa Particular",
      "Caves",
    ];
    const data = searchValue.find((value) => value.startsWith(inputValue));
     if (data) {
    setFilter(data);
  } else { 
    setFilter('');
  }

  }
  return (
    <div className="flex justify-between p-3 border-b border-gray-200">
      <Link to={"/"} className="flex gap-1 items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 -rotate-90 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
        <span className="font-bold text-2xl text-red-500"> HavenHub</span>
      </Link>

      {/* search bar  */}

      <div className="flex items-center gap-2 px-1 py-2 border-black border border-opacity-10 rounded-full shadow-md sm:hidden lg:flex">
        {searchBtn ? (
          <div className="mx-2  cursor-pointer">
            <input
              onChange={handleSearch}
              value={searchValue}
              type="text"
              className="text-center border-none outline-none focus:ring-0 h-full p-0 m-0"
              placeholder="Search Any where ..."
            />
          </div>
        ) : (
          <>
            <div className="mx-2 cursor-pointer">Anywhere</div>
            <div className="h-6 bg-blue-gray-600 border"></div>
            <div className="mx-2 cursor-pointer">Any week</div>
            <div className="h-6 bg-blue-gray-600 border"></div>
          </>
        )}

        <div className="mx-2 flex items-center gap-2 cursor-pointer">
          <span className={searchBtn ? "hidden" : null}>Add guest</span>
          <div
            className="bg-red-500 rounded-full p-1"
            onClick={() => setSearchBtn(!searchBtn)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-white font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* user section  */}

      <Link to={"/addplace"} className="flex items-center gap-2">
        <div className=" flex gap-2">
          <span>Airbnb your home</span>
          <span>
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
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </span>
        </div>
        <div className="flex justify-between items-center gap-1 px-3 py-2 border-black border border-opacity-10 rounded-full shadow-xl">
          <div>
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="flex items-center">
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
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {isAuthenticated ? <span>{user?.name.substring(0, 6)}</span> : null}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
