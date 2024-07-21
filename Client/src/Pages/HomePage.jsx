import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import HeaderGrid from "../components/Header";
import Card from "../components/Card";
import Footerbanner from "../components/Footerbanner";

// data feaching
import { StateContext } from "../store/context";
import { useQuery } from "react-query";
import axios from "axios";
import { actionTypes } from "../store/reducer";
import { AlertComp } from "../utils/Alert";
const fetchProducts = async () => {
  const { data } = await axios.get("https://dummyjson.com/productms");
  return data;
};
function HomePage() {
  const { state, dispatch } = useContext(StateContext);
  // Update to use the new query format
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts, 
    onSuccess: (data) => {
      dispatch({ type: actionTypes.SET_PRODUCTS, payload: data });
    },
    onError: (error) => {
      dispatch({ type: actionTypes.SET_ERROR, payload: error.message });
    },
  });

  console.log(data);

  return (
    <Layout>
      {isLoading && <p>Loading...</p>}
      {error && <AlertComp message={error.message} />}
      {/* header  */}
      <section className="">
        <HeaderGrid />
      </section>
      {/* card  */}
      <section>
        <div className="bg-white max-w-7xl m-auto px-4 py-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
      <section>
        <Footerbanner />
      </section>
    </Layout>
  );
}

export default HomePage;
