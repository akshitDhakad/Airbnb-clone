import React from 'react'
import { Link } from 'react-router-dom';
import CarouselImg from "./Carousel";

function Card({product}) {
 
  // /card-detail/${product.id}
  return (
    <Link to={`/card-detail/${product.id}`} className="group relative">
      <CarouselImg product={product} />

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-md font-bold text-gray-900">
            {/* <span aria-hidden="true" className="absolute inset-0 " /> */}
            {product.title}
          </h3>
        </div>
        <div className="text-sm font-medium text-gray-900">
          <div className="flex  items-center">
            <span>★</span>
            <span>{product.rating}</span>
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
          <p className="text-sm font-medium text-gray-900">
            <div className="flex  items-center">
              <span>₹</span>
              <span>{product.price}</span>
              <span>/night</span>
              <span className="text-gray-500">&nbsp; total before taxes.</span>
            </div>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card