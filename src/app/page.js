import React from "react";
import ProductCard from "./components/ProductCard";
import Link from "next/link";

const HomePage = async () => {
  const res = await fetch("http://localhost:5001/products/", {
    // cache: "force-cache",
    next: {
      revalidate: 5,
    },
  });
  const products = await res.json();
  //   console.log(products);
  return (
    <div className="text-center">
      <h1 className="text-center text-2xl my-5">
        Data Fetching, Caching, and Revalidating Jamil
      </h1>
      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto text-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      <div className="my-20">
        <Link
          href={`/products/`}
          className="text-white bg-blue-500 py-2 px-4 hover:bg-blue-700"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
