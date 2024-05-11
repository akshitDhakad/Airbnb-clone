import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";

function Signup() {
  return (
    <section>
      <div
        className="h-screen px-4 bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/2400x1600/?house,rooms,forest,farm')",
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
              <h1 className="text-3xl font-bold text-center text-theme-red hover:underline">
                Sign up
              </h1>
              <form className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4">
                {/* First Name  */}
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name <span className="text-theme-red">*</span>
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    className="mt-1 p-2 w-full bg-gray border border-gray-300 rounded-md"
                    placeholder="First Name"
                  />
                </div>
                {/* Last Name */}
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name<span className="text-theme-red">*</span>
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    placeholder="Last Name"
                  />
                </div>
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
                    required
                    type="email"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
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
                  <input
                    id="password"
                    required
                    type="password"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    placeholder="Create Password"
                  />
                </div>
                {/* Button  */}
                <div className="col-span-2">
                  <button className="w-full py-2 bg-theme-red text-white">
                    Create Account
                  </button>
                </div>
                <div className="col-span-2 flex gap-x-5 items-center">
                  <div className="w-full border border-gray-300"></div>
                  <div>OR</div>
                  <div className="w-full border border-gray-300"></div>
                </div>
                <div className="col-span-2">
                  <button className="w-full py-2 bg-blue-600 text-white">
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
                  <Link to={"/sign-in"} className="text-sm text-light-blue-500">
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
