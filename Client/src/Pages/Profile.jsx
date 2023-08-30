import React from 'react'
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";



function Profile() {
  const { user} = useAuth();
  
  const navigate = useNavigate();
  const { logout } = useAuth();
   const handleLogout = () => {
     logout();
     navigate("/");
   };

  return (
    <div className="flex justify-center bg-gray-200 px-20 py-10 w-2/5">
      <form className="flex flex-col gap-y-5">
        <div className="flex justify-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div className="flex gap-5">
          <span className="text-gray-700">Name :</span>
          <span>{user.name}</span>
        </div>
        <div className="flex gap-5">
          <span className="text-gray-700">Email :</span>
          <span>{user.email}</span>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white py-1 rounded-xl"
        >
          Log out
        </button>
      </form>
    </div>
  );
}

export default Profile