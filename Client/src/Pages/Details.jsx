import React from 'react'

function Details({ details, handleInputChange }) {
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Apartment Information
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        {/* Type of apartment */}
        <div className="sm:col-span-3 sm:col-start-1">
          <label
            htmlFor="type"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Type of Apartment
          </label>
          <div className="mt-2">
            <select
              required
              name="type"
              id="type"
              value={details.type}
              onChange={handleInputChange}
              autoComplete="type"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Select Type</option>
              <option value="Farm">Farm</option>
              <option value="Villa">Villa</option>
              <option value="Beachfront">Beachfront</option>
              <option value="Countryside">Countryside</option>
              <option value="Tropical">Tropical</option>
              <option value="Lakefront">Lakefront</option>
              <option value="Beach">Beach</option>
              <option value="Amazing">Amazing</option>
              <option value="Rooms">Rooms</option>
              <option value="Tiny-homes">Tiny-homes</option>
              <option value="Beachfont">Beachfont</option>
              <option value="Cabin">Cabin</option>
              <option value="Treehouses">Treehouses</option>
              <option value="Caves">Caves</option>
              <option value="Design">Design</option>
              <option value="Camping">Camping</option>
              <option value="Boats">Boats</option>
              <option value="Ryokans">Ryokans</option>
              <option value="Desert">Desert</option>
              <option value="Beach">Beach</option>
              <option value="Lake">Lake</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        {/* <div className="sm:col-span-3 sm:col-start-1">
          <label
            htmlFor="type"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Type of Apartment
          </label>
          <div className="mt-2">
            <input
              type="text"
              required
              name="type"
              id="type"
              value={details.type}
              onChange={handleInputChange}
              autoComplete="type"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Type of Apartment"
            />
          </div>
        </div> */}
        {/* beds */}
        <div className="sm:col-span-3">
          <label
            htmlFor="bed"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            *** This Field is out Of order ***
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="bed"
              id="bed"
              value={details.beds}
              onChange={handleInputChange}
              autoComplete="address-level1"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Numbers of beds"
            />
          </div>
        </div>

        {/* no of bedrooms */}
        <div className="sm:col-span-3 sm:col-start-1">
          <label
            htmlFor="bedrooms"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nos of Bedrooms
          </label>
          <div className="mt-2">
            <input
              type="Number"
              name="bedrooms"
              required
              value={details.bedrooms}
              onChange={handleInputChange}
              id="bedrooms"
              autoComplete="Bedroom"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Max- number of Bedrooms ...."
            />
          </div>
        </div>

        {/* beds */}
        <div className="sm:col-span-3">
          <label
            htmlFor="beds"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            beds
          </label>
          <div className="mt-2">
            <input
              type="Number"
              name="beds"
              required
              id="beds"
              value={details.beds}
              onChange={handleInputChange}
              autoComplete="beds"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Numbers of beds"
            />
          </div>
        </div>
        {/* no of guests */}
        <div className="sm:col-span-3 sm:col-start-1">
          <label
            htmlFor="guests"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Max-Number of Guests
          </label>
          <div className="mt-2">
            <input
              type="Number"
              name="guests"
              required
              value={details.guests}
              onChange={handleInputChange}
              id="guests"
              autoComplete="Guests"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Max- number of guest can stay ...."
            />
          </div>
        </div>
        {/* price */}
        <div className="sm:col-span-3">
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Price/night
          </label>
          <div className="mt-2">
            <input
              type="Number"
              name="price"
              required
              value={details.price}
              onChange={handleInputChange}
              id="price"
              autoComplete="price"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Price per-night In Indian Rupee(₹)"
            />
          </div>
        </div>
        {/* check-in */}
        <div className="sm:col-span-3">
          <label
            htmlFor="checkin"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Check-In
          </label>
          <div className="mt-2">
            <input
              type="Number"
              name="checkin"
              required
              id="checkin"
              value={details.checkin}
              onChange={handleInputChange}
              autoComplete="check-in"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Check-in: 1:00 pm – 6:00 pm"
            />
          </div>
        </div>
        {/* check-out */}
        <div className="sm:col-span-3">
          <label
            htmlFor="checkout"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Check-Out
          </label>
          <div className="mt-2">
            <input
              type="Number"
              name="checkout"
              required
              id="checkout"
              value={details.checkout}
              onChange={handleInputChange}
              autoComplete="Check-out"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Checkout before 10:00 am"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details