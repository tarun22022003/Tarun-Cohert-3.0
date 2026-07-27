import React, { useContext } from "react";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { MySupermart } from "../Context/MyContext";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  let { SetcartProduct } = useContext(MySupermart);
  return (
    <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-lime-400 hover:-translate-y-2 transition-all duration-300">
      {/* Image */}

      <div
        onClick={() => navigate(`/shop/product/${product.id}`)}
        className="cursor-pointer"
        className="bg-white h-64 flex justify-center items-center overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Body */}

      <div className="p-5">
        <span className="text-xs uppercase tracking-widest text-lime-400">
          {product.category}
        </span>

        <h2 className="text-white font-semibold mt-2 h-14 overflow-hidden">
          {product.title}
        </h2>

        {/* Rating */}

        <div className="flex items-center gap-2 mt-4">
          <Star size={18} className="fill-yellow-400 text-yellow-400" />

          <span className="text-white">{product.rating.rate}</span>

          <span className="text-gray-500">({product.rating.count})</span>
        </div>

        {/* Price */}

        <div className="flex justify-between items-center mt-6">
          <h1 className="text-3xl font-bold text-lime-400">${product.price}</h1>

          <button className="bg-black p-3 rounded-full hover:bg-lime-400 hover:text-black transition">
            <Heart size={20} />
          </button>
        </div>

        {/* Buttons */}

        <div className="flex gap-3 mt-6">
          <button
            onClick={() => {
              SetcartProduct((prev) => {
                const existingProduct = prev.find((item) => {
                  return item.id === product.id;
                });
                if (existingProduct) {
                  return prev.map((item) => {
                    return item.id === product.id
                      ? { ...item, quantity: item.quantity + 1 }
                      : item;
                  });
                }
                return [...prev, { ...product, quantity: 1 }];
              });
            }}
            className="flex-1 bg-lime-400 text-black py-3 rounded-xl font-semibold flex justify-center items-center gap-2 hover:bg-lime-300"
          >
            <ShoppingCart size={18} />
            Add
          </button>

          <button className="bg-zinc-800 p-3 rounded-xl hover:bg-zinc-700">
            <Eye />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
