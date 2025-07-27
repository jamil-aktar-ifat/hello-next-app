import React from "react";
import ProductCard from "./components/ProductCard";

const HomePage = async () => {
  const res = await fetch("http://localhost:5001/products/");
  const products = await res.json();
  console.log(products);
  return (
    <div className="text-center">
      <h1 className="text-center text-2xl my-5">
        Data Fetching, Caching, and Revalidating
      </h1>
      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
