import React, { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  return (
    <div>
      <Banner />
      <Products products={products} />
      <Footer />
    </div>
  );
};

export default Home;
