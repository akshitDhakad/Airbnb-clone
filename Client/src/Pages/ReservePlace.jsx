import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Login from './Login';
import Payment from './Payment';
import { useAuth } from "../AuthContext";


function ReservePlace() {
  const { user, isAuthenticated } = useAuth();
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-7 gap-2 px-20 my-10">
        {/* LEFT Section */}
        <div className="col-span-4">
          <h2 className="text-3xl font-semibold">Confirm and pay</h2>
          <div className="mt-5">
            <h2 className="text-xl font-semibold">Your trip</h2>
            <div className="flex justify-between my-3">
              <span>Dates(1–6 Sep)</span>
              <span>Edit</span>
            </div>
            <div className="flex justify-between my-3">
              <span>Guests(1 guest)</span>
              <span>Edit</span>
            </div>
          </div>
          <hr className="border-gray-400" />
          <div>{!isAuthenticated ? <Payment /> : <Login />}</div>
        </div>
        {/* Right Section */}
        <dir className="col-span-3 ">
          <div className="border rounded-2xl border-gray-400 p-3">
            {/******* Image section ******* */}
            <div className="flex gap-5 my-5">
              <div className="h-28 w-40 rounded-lg overflow-hidden">
                <img
                  src="https://a0.muscache.com/im/pictures/4009782c-d801-4ac2-9ad5-bf7c7f94313d.jpg?im_w=720"
                  alt="thubnail img"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-xs flex flex-col justify-between">
                <div>
                  <p className="text-gray-500">Entire villa</p>
                  <p>Premium 5BHK villa with PVT pool near tiger Point</p>
                </div>
                <p>★ 5.00 (3 reviews)</p>
              </div>
            </div>
            <hr className="border border-gray-400" />
            {/********  price sectioin  ******* */}
            <div className="my-5">
              <h5 className="text-xl">Price details</h5>
              <div className="text-gray-800 flex flex-col gap-1">
                <div className="flex justify-between">
                  <span>₹22,999 x 5 nights</span>
                  <span>₹1,14,995</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline text-sm">Airbnb service fee</span>
                  <span>₹16,234.65</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline text-sm">Taxes</span>
                  <span>₹20,699.1</span>
                </div>
              </div>
            </div>
            <hr className="border border-gray-400" />
            {/* *********  total price section  ********** */}
            <div className="flex justify-between my-5">
              <span className="font-bold">
                Total <span className="underline">(INR)</span>
              </span>
              <span className="font-bold text-red-700">₹1,51,928.75</span>
            </div>
          </div>
        </dir>
      </div>

      <Footer />
    </div>
  );
}

export default ReservePlace