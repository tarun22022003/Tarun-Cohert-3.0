import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  ShoppingCart,
  Star,
  Minus,
  Plus,
} from "lucide-react";
import { MySupermart } from "../Context/MyContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getProducts, SetcartProduct } = useContext(MySupermart);

  const product = getProducts.find(
    (item) => item.id === Number(id)
  );

  const currentIndex = getProducts.findIndex(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center text-2xl">
        Loading Product...
      </div>
    );
  }

  const addToCart = () => {
    SetcartProduct((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity,
        },
      ];
    });
  };

  const nextProduct = () => {
    if (currentIndex < getProducts.length - 1) {
      navigate(
        `/shop/product/${getProducts[currentIndex + 1].id}`
      );
      setQuantity(1);
    }
  };

  const previousProduct = () => {
    if (currentIndex > 0) {
      navigate(
        `/shop/product/${getProducts[currentIndex - 1].id}`
      );
      setQuantity(1);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Back */}

        <button
          onClick={() => navigate("/shop")}
          className="flex items-center gap-2 text-lime-400 mb-8 hover:text-lime-300"
        >
          <ArrowLeft />
          Back to Shop
        </button>

        {/* Main */}

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Image */}

          <div className="bg-white rounded-3xl p-10 flex justify-center items-center">

            <img
              src={product.image}
              alt={product.title}
              className="h-[450px] object-contain hover:scale-105 transition duration-500"
            />

          </div>

          {/* Details */}

          <div>

            <p className="uppercase tracking-widest text-lime-400 font-semibold">
              {product.category}
            </p>

            <h1 className="text-4xl font-bold mt-4">
              {product.title}
            </h1>

            {/* Rating */}

            <div className="flex items-center gap-3 mt-5">

              <Star
                className="fill-yellow-400 text-yellow-400"
              />

              <span className="text-lg">
                {product.rating.rate}
              </span>

              <span className="text-gray-400">
                ({product.rating.count} Reviews)
              </span>

            </div>

            {/* Price */}

            <h2 className="text-5xl font-bold text-lime-400 mt-8">
              ₹ {product.price}
            </h2>

            {/* Description */}

            <div className="mt-8">

              <h3 className="text-2xl font-semibold mb-3">
                Description
              </h3>

              <p className="text-gray-400 leading-8">
                {product.description}
              </p>

            </div>

            {/* Quantity */}

            <div className="mt-10 flex items-center gap-5">

              <h3 className="font-semibold text-xl">
                Quantity
              </h3>

              <div className="flex items-center border border-zinc-700 rounded-xl">

                <button
                  onClick={() =>
                    quantity > 1 &&
                    setQuantity(quantity - 1)
                  }
                  className="p-4 hover:bg-zinc-800"
                >
                  <Minus />
                </button>

                <span className="px-8 text-xl">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="p-4 hover:bg-zinc-800"
                >
                  <Plus />
                </button>

              </div>

            </div>

            {/* Buttons */}

            <div className="flex gap-5 mt-10">

              <button
                onClick={addToCart}
                className="flex-1 bg-lime-400 text-black py-4 rounded-xl font-bold flex justify-center items-center gap-3 hover:bg-lime-300 transition"
              >
                <ShoppingCart />
                Add To Cart
              </button>

            </div>

            {/* Previous / Next */}

            <div className="flex justify-between mt-12">

              <button
                disabled={currentIndex === 0}
                onClick={previousProduct}
                className="flex items-center gap-2 bg-zinc-900 px-6 py-3 rounded-xl disabled:opacity-40 hover:bg-zinc-800"
              >
                <ArrowLeft />
                Previous
              </button>

              <button
                disabled={
                  currentIndex ===
                  getProducts.length - 1
                }
                onClick={nextProduct}
                className="flex items-center gap-2 bg-lime-400 text-black px-6 py-3 rounded-xl disabled:opacity-40 hover:bg-lime-300"
              >
                Next
                <ArrowRight />
              </button>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;