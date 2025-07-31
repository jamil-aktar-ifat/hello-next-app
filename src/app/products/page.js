import ProductCard from "../components/ProductCard";

const AllProductsPage = async () => {
  const res = await fetch("http://localhost:5001/products", {
    cache: "no-store",
  });
  const products = await res.json();
  //   console.log(products);
  return (
    <div>
      <h1 className="text-2xl text-center">All Products</h1>
      <div className="grid grid-cols-3 gap-8 mx-auto my-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
