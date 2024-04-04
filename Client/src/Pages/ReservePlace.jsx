import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Login from './Login';
import Payment from './Payment';
import { useAuth } from "../AuthContext";
import { useLocation } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';

function ReservePlace() {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();
  const data = location.state;
  const airbnbfees = 16234.65;
  const tax = 20699.1;
  const url = data.product.imgURLs[0];




    const obj = {
      "product": data.product,
      "price": data.price,
      "daysDiff": data.daysDiff,
      "date": data.date,
      "guests": data.guests,
      "user": user,
      "airbnbfees": airbnbfees,
      "tax": tax
    }



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
              <div>
                <p>Dates</p>
                <span>from : {data.date[1]} &nbsp;</span>

                <span>&nbsp; To : {data.date[0]}</span>
              </div>

              <button className='px-3  bg-gray-300 rounded'>Edit</button>
            </div>
            <div className="flex justify-between my-3">
              <span>Guests({data.guests} guest)</span>
              <button className='px-3 py-1  bg-gray-300 rounded'>Edit</button>
            </div>
          </div>
          <hr className="border-gray-400" />
          <div className='w-full my-10 text-center'>{user ?<Payment obj={obj}/> : <Login />}</div>
        </div>
        {/* Right Section */}
        <dir className="col-span-3 ">
          <div className="border rounded-2xl border-gray-400 p-3">
            {/******* Image section ******* */}
            <div className="flex gap-5 my-5">
              <div className="h-28 w-40 rounded-lg overflow-hidden">
                <img
                  src={`http://localhost:3000/uploads/${url}`}
                  alt="thubnail img"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-xs flex flex-col justify-between">
                <div>
                  <p className="text-gray-500">
                    Entire {data.product.details.type}
                  </p>
                  <p>{data.product.title}</p>
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
                  <span>
                    ₹{data.price} x {data.daysDiff} nights
                  </span>
                  <span>₹{(data.price * data.daysDiff).toFixed(2)}</span>
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
              <span className="font-bold text-2xl text-red-700">
                ₹{(data.price * data.daysDiff + (airbnbfees + tax)).toFixed(2)}
              </span>
            </div>
          </div>
        </dir>
      </div>

      <Footer />
    </div>
  );
}

export default ReservePlace