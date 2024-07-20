import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { FaUnlockKeyhole } from "react-icons/fa6";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

// Google Authentication

import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

// Auth
import axios from "axios";
import { useMutation } from "react-query";

function Signin() {
  const [passEye, setpassEye] = useState(false);

  const signupMutation = useMutation(
    async (userData) => {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        userData
      ); // Adjust the endpoint as needed
      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log("Signup successful:", data);
        // Handle successful signup
      },
      onError: (error) => {
        console.error("Signup failed:", error);
        // Handle signup error, e.g.
      },
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData.entries());
    signupMutation.mutate(userData);
  };

  const { isLoading, isError, error } = signupMutation;

  // Google Authentication
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        // Handle successful login here
      })
      .catch((error) => {
        console.error(error);
        // Handle errors here
      });
  };

  return (
    <section>
      <div
        className="h-screen px-4 bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="max-w-6xl w-full h-[95vh] px-10 m-auto">
          <div className="h-full w-full grid grid-cols-2">
            <div className="h-full flex flex-col justify-center">
              <Link to={"/"}>
                <div className="mx-auto h-36 w-36 p-3 rounded-full bg-white border-3 border-theme-red">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="/assets/logo/logo.png"
                    alt="Havenhub"
                  />
                </div>
              </Link>
              <h1 className="text-8xl font-bold text-white text-center">
                HavenHub
              </h1>
              <p className="text-white mt-5 text-center">
                HavenHub is a platform that connects you with the best
                accomodation for your needs. Sign up to get started.
              </p>
            </div>
            <div className="bg-white px-4 py-3">
              <h1 className="text-3xl font-bold text-center text-theme-red hover:underline flex  items-center justify-center gap-x-5">
                Sign In <FaUnlockKeyhole />
              </h1>
              <form
                onSubmit={handleSubmit}
                className="mt-5 grid grid-cols-2 gap-x-5 gap-y-8"
              >
                {/* Email */}
                <div className="col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email<span className="text-theme-red">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="mt-1 p-2 w-full text-sm bg-white border border-gray-300 outline-none focus:ring-2 focus:ring-theme-red rounded-md"
                    placeholder="Email Address"
                  />
                </div>
                {/* Password */}
                <div className="col-span-2 mb-3">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password<span className="text-theme-red">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={passEye ? "text" : "password"}
                      name="password"
                      className="text-sm mt-1 p-2 w-full bg-white border outline-none focus:ring-2 focus:ring-theme-red  rounded-md"
                      placeholder="Create Password"
                      required
                    />
                    <div
                      onClick={() => setpassEye(!passEye)}
                      className="hover:cursor-pointer absolute right-5 top-1/3 text-black"
                    >
                      {passEye ? <FaRegEye /> : <FaRegEyeSlash />}
                    </div>
                  </div>
                </div>
                {/* Button  */}
                <div className="col-span-2">
                  <button className="w-full py-2 font-bold bg-theme-red text-white">
                    {isLoading ? "Logging Account..." : "Login Account"}
                  </button>
                </div>
                <div className="col-span-2 flex gap-x-5 items-center">
                  <div className="w-full border border-gray-300"></div>
                  <div>OR</div>
                  <div className="w-full border border-gray-300"></div>
                </div>
                {/* Goolg Authentication */}
                <div className="col-span-2">
                  <button
                    onClick={signInWithGoogle}
                    className="w-full py-2 bg-blue-600 text-white"
                  >
                    <Link
                      to="/sign-up"
                      className="flex items-center gap-2 justify-center"
                    >
                      Sign Up with Google <FaGoogle />
                    </Link>
                  </button>
                </div>
                <p className="flex items-center gap-x-2 text-sm">
                  Already have an Account ?
                  <Link
                    to={"/sign-up"}
                    className="text-sm hover:underline text-blue-900"
                  >
                    Sign Up
                  </Link>
                </p>
              </form>
              <div>
                {isError && (
                  <div className="text-red-500 text-sm mt-2">
                    {error.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signin;
