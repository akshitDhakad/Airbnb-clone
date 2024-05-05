import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaChevronCircleRight } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";

function Card() {
  const [tab, setTab] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div
        onMouseEnter={() => setTab(true)}
        onMouseLeave={() => setTab(false)}
        className="relative h-72 w-full rounded-2xl overflow-hidden hover:cursor-pointer"
      >
        <div
          className={`${
            tab ? "block" : "hidden"
          } absolute h-full w-full flex justify-between items-center`}
        >
          <button className="">
            <IoIosArrowDropleftCircle className="text-4xl text-white" />
          </button>
          <button className="">
            <FaChevronCircleRight className="text-3xl text-white" />
          </button>
        </div>
        <img
          className="h-full w-full object-cover"
          loading="lazy"
          src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8fDB8fHww"
          alt="HavenHub"
        />
      </div>
    </>
  );
}

export default Card;
