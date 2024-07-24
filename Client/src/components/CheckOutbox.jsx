import React, { useState, useRef } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

function CheckOutbox() {
  const [showMore, setShowMore] = useState(false);
  const [adults, setAdults] = useState(1);

  // select check In date
  const [showCheckInInput, setShowCheckInput] = useState(false);
  const checkInDateInputRef = useRef(null);

  const handleCheckInLabelClick = () => {
    setShowCheckInput(true);
    if (dateInputRef.current) {
      dateInputRef.current.focus();
    }
  };


  // select check In date
  const [showCheckOutInput, setShowCheckOutInput] = useState(false);
  const checkOutDateInputRef = useRef(null);
  const handleCheckOutLabelClick = () => {
    setShowCheckOutInput(true);
    if (dateInputRef.current) {
      dateInputRef.current.focus();
    }
  };

  return (
    <>
      <div className="p-4 border-theme-gray shadow-lg border-base-700 rounded-2xl">
        {/* heading  */}
        <div className="mb-3">
          <h2 className="text-xl text-gray-800">Add dates for prices</h2>
        </div>
        {/* content  */}
        <div className="mb-3 border-theme-gray grid grid-cols-2 rounded-xl">
          <div className="p-2 border-b border-e border-gray-800">
            <p className="uppercase text-xs">check In</p>
            <div>
              {!showCheckInInput && (
                <label
                  htmlFor="check-in-date"
                  className="text-gray-800 text-sm cursor-pointer"
                  onClick={handleCheckInLabelClick}
                >
                  Add date
                </label>
              )}
              {showCheckInInput && (
                <input
                  id="check-in-date"
                  className="block w-100"
                  type="date"
                  ref={checkInDateInputRef}
                  onBlur={() => setShowCheckInput(false)} // Hide the input field when it loses focus
                />
              )}
            </div>
            <input id="check-in-date" className="hidden" type="date" />
          </div>
          <div className="p-2 border-b border-gray-800">
            <p className="uppercase text-xs">check In</p>
            <div>
              {!showCheckOutInput && (
                <label
                  htmlFor="check-in-date"
                  className="text-gray-800 text-sm cursor-pointer"
                  onClick={handleCheckOutLabelClick}
                >
                  Add date
                </label>
              )}
              {showCheckOutInput && (
                <input
                  id="check-in-date"
                  className="block w-100"
                  type="date"
                  ref={checkOutDateInputRef}
                  onBlur={() => setShowCheckOutInput(false)} // Hide the input field when it loses focus
                />
              )}
            </div>
          </div>
          <div className="col-span-2 px-3 realtive ">
            <div className="relative">
              <button
                onClick={() => setShowMore(!showMore)}
                className="py-1 w-full flex items-center justify-between bg-white rounded-md"
              >
                <div className="flex flex-col">
                  <span className="text-sm">Guests</span>
                  <span className="text-sm">1 guest</span>
                </div>
                <div
                  className={`${
                    showMore ? "rotate-180" : ""
                  } transition-transform duration-200`}
                >
                  <IoIosArrowDown />
                </div>
              </button>
              <div
                className={`${
                  showMore ? "visible opacity-100" : "invisible opacity-0"
                } absolute top-12 left-[-16px] w-64 bg-white border border-gray-300 rounded-md shadow-md transition-opacity duration-200`}
              >
                <div className="py-4 px-2 w-full">
                  {/* Adult  */}
                  <div className="flex justify-between mb-3">
                    <div className="flex flex-col text-sm">
                      <span className="text-md">Adults</span>
                      <span>Age 13+</span>
                    </div>
                    <div className="flex gap-x-2 items-center text-2xl">
                      <span onClick={() => setAdults(adults=adults - 1)}>
                        <CiCircleMinus className="text-2xl text-gray-600 hover:text-gray-900 hover:cursor-pointer" />
                      </span>
                      <span>{adults}</span>
                      <span onClick={() => setAdults(adults + 1)}>
                        <CiCirclePlus className="text-2xl text-gray-600 hover:text-gray-900 hover:cursor-pointer" />
                      </span>
                    </div>
                  </div>
                  {/* Children */}
                  <div className="flex justify-between mb-3">
                    <div className="flex flex-col text-sm">
                      <span className="text-md">Children</span>
                      <span>Age 2-12</span>
                    </div>
                    <div className="flex gap-x-2 items-center text-2xl">
                      <span>
                        <CiCircleMinus className="text-2xl text-gray-600 hover:text-gray-900 hover:cursor-pointer" />
                      </span>
                      <span>1</span>
                      <span>
                        <CiCirclePlus className="text-2xl text-gray-600 hover:text-gray-900 hover:cursor-pointer" />
                      </span>
                    </div>
                  </div>
                  {/* Infants  */}
                  <div className="flex justify-between mb-3">
                    <div className="flex flex-col text-sm">
                      <span className="text-md">Infants</span>
                      <span>Under 2</span>
                    </div>
                    <div className="flex gap-x-2 items-center text-2xl">
                      <span>
                        <CiCircleMinus className="text-2xl text-gray-600 hover:text-gray-900 hover:cursor-pointer" />
                      </span>
                      <span>1</span>
                      <span>
                        <CiCirclePlus className="text-2xl text-gray-600 hover:text-gray-900 hover:cursor-pointer" />
                      </span>
                    </div>
                  </div>
                  {/* Pets  */}
                  <div className="flex justify-between mb-3">
                    <div className="flex flex-col text-sm">
                      <span className="text-md">Pets</span>
                      <span>Bringing a service animal? ts</span>
                    </div>
                    <div className="flex gap-x-2 items-center text-2xl">
                      <span>
                        <CiCircleMinus className="text-2xl text-gray-600 hover:text-gray-900 hover:cursor-pointer" />
                      </span>
                      <span>1</span>
                      <span>
                        <CiCirclePlus className="text-2xl text-gray-600 hover:text-gray-900 hover:cursor-pointer" />
                      </span>
                    </div>
                  </div>
                  {/* This place has a maximum of 6 guests, not including infants. Pets aren't allowed.
                   */}
                  <div className="flex justify-between mb-3">
                    <div className="flex flex-col text-sm">
                      <span className="text-md">Pets</span>
                      <span>Bringing a service animal? ts</span>
                    </div>
                    <div className="flex gap-x-2 items-center text-2xl">
                      <span>
                        <CiCircleMinus className="text-2xl text-gray-600 hover:text-gray-900 hover:cursor-pointer" />
                      </span>
                      <span>1</span>
                      <span>
                        <CiCirclePlus className="text-2xl text-gray-600 hover:text-gray-900 hover:cursor-pointer" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="w-full bg-gradient-to-r from-red-900 via-red-600 to-pink-500 py-3 text-center rounded-xl text-white font-semibold">
            Check availability
          </button>
        </div>
      </div>
    </>
  );
}

export default CheckOutbox;
