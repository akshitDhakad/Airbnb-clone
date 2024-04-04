import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdatePlace from "./UpdatePlace";
import Loader from "./Loader"

function Database() {
  const [items, setData] = useState(null); // State to store the fetched data

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const {data} = await axios.get("http://localhost:3000/database");
        setData(data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  

  if (!items) {
    return <div><Loader/></div>;
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item._id} className="flex flex-col items-center my-5">
          {item && <UpdatePlace data={item} />}
        </div>
      ))}
    </div>
  );
}

export default Database;
