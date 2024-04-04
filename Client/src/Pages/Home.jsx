import Card from "./Card";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function Home({ product }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API request (replace with your actual API call)
    setTimeout(() => {
      setProducts(product);
      setLoading(false); // Set loading to false when products are fetched
    }, 2000); // Simulate a 2-second delay for fetching data (adjust as needed)
  }, [product]);

  return (
    <div className="mx-auto sm:px-6 max-w-full my-10">
      {loading ? (
        // Display loader while loading is true
        <div className="text-center py-8">
          <p className="text-gray-500"><Loader/></p>
          {/* You can add a loading spinner here */}
        </div>
      ) : (
        // Display product cards when loading is false
        <div className="grid sm:justify-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
