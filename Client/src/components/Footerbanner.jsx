import React, { useState } from "react";

const Tab1 = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-x-2 gap-y-5">
        <div>
          <h3>Canmore</h3>
          <p className="text-gray-600 font-thin text-sm">Holiday rentals</p>
        </div>
        <div>
          <h3>Benalmádena</h3>
          <p className="text-gray-600 font-thin text-sm">Flat rentals</p>
        </div>
        <div>
          <h3>Marbella</h3>
          <p className="text-gray-600 font-thin text-sm"> Holiday rentals</p>
        </div>
        <div>
          <h3>Marbella</h3>
          <p className="text-gray-600 font-thin text-sm"> Holiday rentals</p>
        </div>
        <div>
          <h3>Mijas</h3>
          <p className="text-gray-600 font-thin text-sm">Holiday rentals</p>
        </div>
        <div>
          <h3> Prescott </h3>
          <p className="text-gray-600 font-thin text-sm">Holiday rentals</p>
        </div>
        <div>
          <h3> Scottsdale </h3>
          <p className="text-gray-600 font-thin text-sm">Rentals with pools</p>
        </div>
        <div>
          <h3> Tucson </h3>
          <p className="text-gray-600 font-thin text-sm">Flat rentals</p>
        </div>
        <div>
          <h3> Jasper </h3>
          <p className="text-gray-600 font-thin text-sm">Cabin rentals</p>
        </div>
        <div>
          <h3> Mountain View </h3>
          <p className="text-gray-600 font-thin text-sm">House rentals </p>
        </div>
        <div>
          <h3> Devonport </h3>
          <p className="text-gray-600 font-thin text-sm">Holiday rentals</p>
        </div>
        <div>
          <h3> Mallacoota </h3>
          <p className="text-gray-600 font-thin text-sm">Holiday rentals </p>
        </div>
        <div>
          <h3> Ibiza </h3>
          <p className="text-gray-600 font-thin text-sm">Holiday rentals </p>
        </div>
        <div>
          <h3> Anaheim </h3>
          <p className="text-gray-600 font-thin text-sm">Apartment rentals </p>
        </div>
        <div>
          <h3> Monterey </h3>
          <p className="text-gray-600 font-thin text-sm">House rentals </p>
        </div>
        <div>
          <h3> Paso Robles</h3>
          <p className="text-gray-600 font-thin text-sm"> Holiday rentals </p>
        </div>
        <div>
          <h3>Santa Barbara </h3>
          <p className="text-gray-600 font-thin text-sm">
            {" "}
            Pet-friendly rentals
          </p>
        </div>
        <div>
          <h3>Sonoma </h3>
          <p className="text-gray-600 font-thin text-sm"> House rentals</p>
        </div>
      </div>
    </>
  );
};
const Tab2 = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-x-2 gap-y-5">
        <div>
          <h3>Phoenix </h3>
          <p className="text-gray-600 font-thin text-sm">Apartment rentals</p>
        </div>
        <div>
          <h3>Hot Springs </h3>
          <p className="text-gray-600 font-thin text-sm">House rentals</p>
        </div>
        <div>
          <h3>Los Angeles </h3>
          <p className="text-gray-600 font-thin text-sm">Bed and breakfasts</p>
        </div>
        <div>
          <h3>San Diego</h3>
          <p className="text-gray-600 font-thin text-sm"> Flat rentals</p>
        </div>
        <div>
          <h3>San Francisco</h3>
          <p className="text-gray-600 font-thin text-sm"> Holiday rentals</p>
        </div>
        <div>
          <h3> Barcelona </h3>
          <p className="text-gray-600 font-thin text-sm">Holiday rentals</p>
        </div>
        <div>
          <h3> Prague </h3>
          <p className="text-gray-600 font-thin text-sm">Holiday rentals </p>
        </div>
        <div>
          <h3> Washington </h3>
          <p className="text-gray-600 font-thin text-sm">
            Pet-friendly rentals{" "}
          </p>
        </div>
        <div>
          <h3> Keswick </h3>
          <p className="text-gray-600 font-thin text-sm">Cottage rentals </p>
        </div>
        <div>
          <h3> London</h3>
          <p className="text-gray-600 font-thin text-sm"> Villa rentals</p>
        </div>
        <div>
          <h3> Scarborough </h3>
          <p className="text-gray-600 font-thin text-sm">Holiday rentals </p>
        </div>
        <div>
          <h3> Sherwood Forest</h3>
          <p className="text-gray-600 font-thin text-sm"> Cabin rentals </p>
        </div>
        <div>
          <h3> York</h3>
          <p className="text-gray-600 font-thin text-sm">
            {" "}
            Pet-friendly rentals{" "}
          </p>
        </div>
        <div>
          <h3> Paris </h3>
          <p className="text-gray-600 font-thin text-sm">Villa rentals</p>
        </div>
        <div>
          <h3> Rhodes </h3>
          <p className="text-gray-600 font-thin text-sm">Flat rentals</p>
        </div>
        <div>
          <h3>Nashville </h3>
          <p className="text-gray-600 font-thin text-sm"> Holiday rentals </p>
        </div>
        <div>
          <h3>Dublin </h3>
          <p className="text-gray-600 font-thin text-sm"> House rentals</p>
        </div>
        <div>
          <h3>Show more </h3>
          <p className="text-gray-600 font-thin text-sm">{""}</p>
        </div>
      </div>
    </>
  );
};

function Footerbanner() {
  const [tab, setTab] = useState(0);
  return (
    <div className="max-w-7xl flex flex-col gap-y-5 bg-white px-4 py-10">
      <h2 className="text-2xl ">Inspiration for future getaways</h2>

      <div className="flex gap-x-5 border-b border-gray-500 ">
        <div
          onClick={() => setTab(0)}
          className={`cursor-pointer ${
            tab === 0 ? "border-b-2 border-gray-600" : null
          }`}
        >
          Popular
        </div>
        <div
          onClick={() => setTab(1)}
          className={`cursor-pointer ${
            tab === 1 ? "border-b-2 border-gray-600" : null
          }`}
        >
          Art & culture
        </div>
        <div
          onClick={() => setTab(2)}
          className={`cursor-pointer ${
            tab === 2 ? "border-b-2 border-gray-600" : null
          }`}
        >
          Outdoors
        </div>
        <div
          onClick={() => setTab(3)}
          className={`cursor-pointer ${
            tab === 3 ? "border-b-2 border-gray-600" : null
          }`}
        >
          Moutains
        </div>
        <div
          onClick={() => setTab(4)}
          className={`cursor-pointer ${
            tab === 4 ? "border-b-2 border-gray-600" : null
          }`}
        >
          Beach
        </div>
        <div
          onClick={() => setTab(5)}
          className={`cursor-pointer ${
            tab === 5 ? "border-b-2 border-gray-600" : null
          }`}
        >
          Unique stays
        </div>
        <div
          onClick={() => setTab(6)}
          className={`cursor-pointer ${
            tab === 6 ? "border-b-2 border-gray-600" : null
          }`}
        >
          Categories
        </div>
        <div
          onClick={() => setTab(7)}
          className={`cursor-pointer ${
            tab === 7 ? "border-b-2 border-gray-600" : null
          }`}
        >
          Things to do
        </div>
      </div>
      <div>
        {tab === 0 ? <Tab1 /> : null}
        {tab === 1 ? <Tab2 /> : null}
        {tab === 2 ? <Tab1 /> : null}
        {tab === 3 ? <Tab2 /> : null}
        {tab === 4 ? <Tab1 /> : null}
        {tab === 5 ? <Tab2 /> : null}
        {tab === 6 ? <Tab1 /> : null}
        {tab === 7 ? <Tab2 /> : null}
      </div>
    </div>
  );
}

export default Footerbanner;
