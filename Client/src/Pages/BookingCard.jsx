import React from "react";

function BookingCard() {
  return (
    <div className="bg-gray-200 w-4/5 ">
      <div className="grid grid-cols-5 gap-20 p-5 overflow-hidden">
        <div className="w-36 h-36">
          <img
            src="https://a0.muscache.com/im/pictures/acb0827d-d289-4929-8152-42b091f0fb3d.jpg?im_w=720"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative col-span-4">
          <div>
            <h4 className="text-xl font-bold">
              LakeView Premium Room in Alleppey
            </h4>
            <h6 className="text-md">Kainakary South, Kerala, India</h6>
          </div>
          <div className="flex gap-40 my-3 font-bold text-gray-500">
            <div className="flex flex-col">
              <span>check-In</span>
              <span className="text-sm">2/9/2023</span>
            </div>
            <div className="flex flex-col">
              <span>check-Out</span>
              <span className="text-sm">8/9/2023</span>
            </div>
          </div>
          <div className="absolute right-5 text-red-500 text-2xl font-bold">
            ₹ 2,500
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;