import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden p-4 hover:shadow-lg transition">
      <Image
        src={product.image}
        alt={product.productName}
        width={800}
        height={800}
        className="mb-4"
      />
      <h2 className="text-lg font-semibold">{product.productName}</h2>
      <p className="text-sm text-gray-500">{product.brand}</p>
      <p className="text-gray-700 font-bold mt-2">${product.price}</p>
      <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
        {product.category}
      </span>
    </div>
  );
};

export default ProductCard;
