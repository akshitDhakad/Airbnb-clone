import React from "react";
import { Link } from "react-router-dom";

// icons
import { IoSearch } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
function Navbar(...classes) {
  return (
    <nav className="border-b shadow-sm">
      <div className="max-w-7xl m-auto px-4 py-3">
        <div className="flex justify-between">
          {/* brand logo  */}

          <div className="">
            <Link to={"/"} className="flex items-center gap-x-2">
              <div className="h-10">
                <img
                  loading="lazy"
                  className="h-full w-full object-center object"
                  src="/assets/logo/logo.png"
                  alt="havenhub logo"
                />
              </div>

              <div>
                <h1 className="text-2xl text-theme-red font-semibold">
                  HavenHub Admin
                </h1>
              </div>
            </Link>
          </div>
          {/* search button  */}
          {/* <div className="nav-search -mr-52">
            <div className="flex gap-x-4 rounded-3xl py-2 px-3 border shadow-sm">
              <div>Anywhere</div>
              <div className="border border-gray-600"></div>
              <div>Any week</div>
              <div className="border border-gray-600"></div>
              <div>Add guests</div>
              <div>
                <button className="bg-theme-red p-2 rounded-full text-white">
                  <IoSearch />
                </button>
              </div>
            </div>
          </div> */}
          {/* buttons */}
          <div className="login-btn flex items-center gap-x-4">
            {/* <div>
              <button>Havenhub your home</button>
            </div> */}
            {/* <div>
              <AiOutlineGlobal className="text-2xl" />
            </div> */}
            {/* profile button  */}
            {/* flex gap-x-2 rounded-3xl py-2 px-3 border shadow-sm cursor-pointer */}
            <div className="dropdown dropdown-bottom dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="flex gap-x-2 rounded-3xl py-2 px-3 border shadow-sm cursor-pointer "
              >
                <div>
                  <HiMenu className="text-2xl" />
                </div>
                <div>
                  <FaUserCircle className="text-2xl" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box border border-gray-900 w-52"
              >
                <li>
                  <Link to={"sign-up"}>Log out</Link>
                </li>
                <hr />
                <li>
                  <Link to={"sign-up"}>Havenhub your home</Link>
                </li>

                <li>
                  <Link to={"sign-up"}>Help Center</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
