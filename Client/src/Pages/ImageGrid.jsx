import React from 'react'

function ImageGrid({ showGrid, setshowGrid }) {
  return (
    <div className="w-full h-full bg-white px-20 py-10 flex flex-col ">
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
      <div>
        <div className="h-80 w-3/4 m-auto my-10">
          <img
            className="w-full h-full object-cover"
            src="https://a0.muscache.com/im/pictures/27013fec-93f9-4250-b9b6-0004a3f6aefb.jpg?im_w=1200"
            alt="image1"
          />
        </div>
        <div className="h-80 w-3/4 m-auto my-10">
          <img
            className="w-full h-full object-cover"
            src="https://a0.muscache.com/im/pictures/999032d1-87ff-4e46-9a72-e5d06d093830.jpg?im_w=720"
            alt="image1"
          />
        </div>
        <div className="h-80 w-3/4 m-auto my-10">
          <img
            className="w-full h-full object-cover"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-14584406/original/7913b9c7-a5a1-426b-9586-855fc95eaf62.jpeg?im_w=720"
            alt="image1"
          />
        </div>
        <div className="h-80 w-3/4 m-auto my-10">
          <img
            className="w-full h-full object-cover"
            src="https://a0.muscache.com/im/pictures/ea2254fb-40fe-40fa-bd27-084841e58aee.jpg?im_w=720"
            alt="image1"
          />
        </div>
        <div className="h-80 w-3/4 m-auto my-10">
          <img
            className="w-full h-full object-cover"
            src="https://a0.muscache.com/im/pictures/386d9f61-fc5a-4b41-9e34-495c01141422.jpg?im_w=720"
            alt="image1"
          />
        </div>
       

       
      </div>
    </div>
  );
}

export default ImageGrid