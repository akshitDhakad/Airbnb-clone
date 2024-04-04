import React, { useState } from "react";
import { Link } from 'react-router-dom';
import CarouselImg from "./Carousel";

function Card({product}) {

  const [like ,setLike] = useState(false)
  // console.log(product)
  // /card-detail/${product.id}
  return (
    <Link to={`/card-detail/${product._id}`} className="group relative">
      <div>
        <svg
          onMouseEnter={() => setLike(!like)}
          
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-8 h-8  text-white bg-gray-700 rounded-full p-1 font-bold absolute left-2 top-2 z-50 ${like?"bg-red-700":"bg-gray-500"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>

        <CarouselImg product={product} />

        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-md font-bold text-gray-900">
              {/* <span aria-hidden="true" className="absolute inset-0 " /> */}
              {product.address}
            </h3>
          </div>
          <div className="text-sm font-medium text-gray-900">
            <div className="flex  items-center">
              <span>★</span>
              <span>4.5</span>
            </div>
          </div>
        </div>
        <div className="mt-0 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href={product.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.brand}
              </a>
            </h3>
          </div>
        </div>
        <div className="mt-0 flex justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-900">
              <div className="flex  items-center">
                <span>₹</span>
                <span>{product.details.price}</span>
                <span>/night</span>
                <span className="text-gray-500">
                  &nbsp; total before taxes.
                </span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card