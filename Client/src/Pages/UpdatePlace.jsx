import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdatePlace({ data }) {
  const navigate = useNavigate();


  function Update(){
    navigate(`/updatecard/${data?._id}`,{state : data});
  }
  
 
  return (
    <div className="bg-gray-200  w-10/12 relative">
      <div className="grid  grid-cols-5 gap-20 p-4 overflow-hidden">
        <div className="w-36 h-36">
          <img
            src={`http://localhost:3000/uploads/${data?.imgURLs?.[0]}`}
            alt="imgage"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative col-span-4">
          <div>
            <h4 className="text-xl font-bold">{data?.title}</h4>
            <h6 className="text-md">{data?.address}</h6>
          </div>
          <div className="flex gap-40 my-3 font-bold text-gray-500">
            <span>Desciption</span>
            <p>{data?.description.slice(0, 200)}...</p>
          </div>
        </div>
      </div>
      <div className=" flex gap-5 absolute right-0 my-1 text-white">
        <div
          onClick={Update}
          className="bg-blue-900 px-2 rounded-lg p-1 hover:bg-blue-700"
        >
          Update
        </div>
        <div className="bg-blue-900 px-2 rounded-lg p-1 hover:bg-red-700">
          Delete
        </div>
      </div>
    </div>
  );
}

export default UpdatePlace;
