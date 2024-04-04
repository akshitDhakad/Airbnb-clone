import React from "react";

function ImageGrid({ showGrid, setshowGrid, urls }) {
  console.log(urls);

  // Function to handle image loading errors
  const handleImageError = (event) => {
    event.target.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjIfEB_B6s7r1X-dzBA_qWayfL0kloIDmuA&usqp=CAU";
  };

  return (
    <div className="w-full h-full bg-white lg:px-20 py-10 flex flex-col">
      <div onClick={() => setshowGrid(!showGrid)}>
        <svg
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
      <div className="flex flex-col gap-y-5">
        {urls &&
          urls.map((links) => (
            <div key={links} className="h-80 sm:w-11/12 lg:w-3/4 m-auto my-10">
              <img
                className="w-full h-full object-cover"
                src={`http://localhost:3000/uploads/${links}`}
                alt="image1"
                onError={handleImageError}
              />
            </div>
          ))}
        {/* Display a default image when there are no URLs */}
        {(!urls || urls.length === 0) && (
          <div className="h-80 sm:w-11/12 lg:w-3/4 m-auto my-10">
            <img
              className="w-full h-full object-cover"
              src="/path-to-your-default-image.jpg"
              alt="Default Image"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageGrid;
