import React from 'react'

function Filter({ filter, showFilter }) {
  return (
    <div className="absolute z-50 w-6/12 h-6/12 bg-white left-1/4 top-1/4 border border-black rounded-lg p-1">
      <div>
        <svg
            onClick={() => showFilter(!filter)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="w-full h-full flex flex-col  gap-y-5 px-5 overflow-y-auto">
        <div>Type of Place</div>
        <div>Price Range</div>
        <div> Rooms and beds</div>
        <div>Property Type</div>
        <div>Amenities</div>
      </div>
    </div>
  );
}

export default Filter