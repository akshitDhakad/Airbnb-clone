import React from 'react'
import products from "../data";
import Card from './Card';


function Home() {


  return (
    // <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
      <div
        className="grid sm:justify-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
          gap-x-3 gap-y-36"
      >
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
    // </div>
  );
}
5
export default Home