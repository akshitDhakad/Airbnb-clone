import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaChevronCircleRight } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";

function Card() {
  const [tab, setTab] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <div
        onMouseEnter={() => setTab(true)}
        onMouseLeave={() => setTab(false)}
        className="relative h-64 w-full rounded-2xl overflow-hidden hover:cursor-pointer"
      >
        <div>
          <button
            className={`absolute top-1/2 left-0 -mt-4 ${
              tab ? "block" : "hidden"
            }`}
          >
            <IoIosArrowDropleftCircle className="text-4xl text-white" />
          </button>
          <button
            className={`absolute top-1/2 right-1 -mt-4 ${
              tab ? "block" : "hidden"
            }`}
          >
            <FaChevronCircleRight className="text-3xl text-white" />
          </button>
        </div>
        <Link to={"/havenhub/car-detail"}>
          <img
            loading="lazy"
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8fDB8fHww"
            alt="HavenHub"
          />
        </Link>
      </div>
      <div className="mt-2 px-1">
        <h6>Mashobra,India</h6>
        <p className="text-gray-600 text-sm">Mountain views</p>
        <p className="text-gray-600 text-sm">5 nights . 21-26 Jul</p>
        <p className="text-gray-800">
          <span className="underline"> ₹ 1,35,045 total before taxes</span>
          <span>.</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
