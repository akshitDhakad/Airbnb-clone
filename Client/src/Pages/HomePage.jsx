import React from "react";
import Layout from "../components/Layout";
import HeaderGrid from "../components/Header";
import Card from "../components/Card";
import Footerbanner from "../components/Footerbanner";

function HomePage() {
  return (
    <Layout>
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
