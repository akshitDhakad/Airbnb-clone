import React from "react";

import { Link } from "react-router-dom";
// icons 
import { CiFilter } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";




function AdminHeader() {
  return (
    <div className="w-full flex items-center justify-between px-2 py-1 shadow-sm">
      <div className="text-xl">Product (2/6)</div>
      <div>
        <form action="">
          <button></button>
          <input type="text" className="rounded-md px-3 py-1 text-sm text-center font-thin placeholder:italic" placeholder="Search for Products here ..." />
        </form>
      </div>

      <div className="flex items-center">
        <button className="bg-gray-200 text-xs py-3 px-3 flex items-center gap-x-2">
          <CiFilter />
          <span className="font-sm">more Filters</span>
        </button>
        <Link to={"/admin/addProduct"}>
          <button className="bg-black text-xs text-white py-3 px-3 flex items-center gap-x-2">
            <FaPlus />
            <span>Add New Products</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AdminHeader;
