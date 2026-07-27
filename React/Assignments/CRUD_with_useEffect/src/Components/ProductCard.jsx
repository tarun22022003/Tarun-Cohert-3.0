import { Star, ShoppingCart } from "lucide-react";
import React, { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const ProductCard = ({ product, isIncart }) => {
  let { setAddToCart, increaseQuant, decreaseQuant } = useContext(MyStore);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Product Image */}
      <div className="h-60 bg-gray-100 flex items-center justify-center p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category */}
        <span className="text-xs text-blue-600 uppercase font-semibold">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold mt-2 line-clamp-2">{product.title}</h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center text-yellow-500">
            <Star size={18} fill="currentColor" />
            <span className="ml-1 font-semibold">{product.rating.rate}</span>
          </div>

          <span className="text-gray-500 text-sm">
            ({product.rating.count} Reviews)
          </span>
        </div>

        {/* Price & Button */}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>

          {!isIncart || isIncart.quantity === 0 ? (
            <button
              onClick={() => {
                setAddToCart((prev) => [...prev, { ...product, quantity: 1 }]);
                alert("Product Added to Cart");
              }}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              <ShoppingCart size={18} />
              Add
            </button>
          ) : (
            <button>
              <span onClick={() => decreaseQuant(product.id)}>-</span>
              <span>{isIncart.quantity}</span>
              <span onClick={() => increaseQuant(product.id)}>+</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
