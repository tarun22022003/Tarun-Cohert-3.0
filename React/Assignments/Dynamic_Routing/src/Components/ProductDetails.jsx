import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {
  Star,
  ShoppingCart,
  Heart,
  Minus,
  Plus,
} from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);


  
  let getProduct = async () => {
    try {
      let response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
      
    } catch (error) {
      console.log("Error in API", error);
      
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center">
        <h1 className="text-white text-3xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* Left */}

        <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-10 flex justify-center items-center">

          <img
            src={product.image}
            alt={product.title}
            className="h-[500px] object-contain hover:scale-105 transition duration-300"
          />

        </div>

        {/* Right */}

        <div>

          <span className="bg-lime-400 text-black px-5 py-2 rounded-full font-semibold">
            {product.category}
          </span>

          <h1 className="text-5xl font-bold mt-6">
            {product.title}
          </h1>

          <div className="flex items-center gap-3 mt-5">

            <Star
              className="fill-yellow-400 text-yellow-400"
              size={20}
            />

            <span>{product.rating.rate}</span>

            <span className="text-gray-400">
              ({product.rating.count} Reviews)
            </span>

          </div>

          <h2 className="text-5xl font-bold text-lime-400 mt-8">
            ${product.price}
          </h2>

          <p className="text-gray-400 leading-8 mt-8">
            {product.description}
          </p>

          {/* Quantity */}

          <div className="flex items-center gap-6 mt-10">

            <h3 className="text-xl">
              Quantity
            </h3>

            <div className="flex items-center border border-zinc-700 rounded-lg">

              <button
                onClick={() =>
                  qty > 1 && setQty(qty - 1)
                }
                className="p-3 hover:bg-zinc-800"
              >
                <Minus />
              </button>

              <span className="px-6">
                {qty}
              </span>

              <button
                onClick={() => setQty(qty + 1)}
                className="p-3 hover:bg-zinc-800"
              >
                <Plus />
              </button>

            </div>

          </div>

          {/* Buttons */}

          <div className="flex gap-5 mt-12 flex-wrap">

            <button className="bg-lime-400 text-black px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-lime-300">

              <ShoppingCart />

              Add To Cart

            </button>

            <button className="bg-white text-black px-10 py-4 rounded-xl font-bold hover:bg-gray-300">

              Buy Now

            </button>

            <button className="bg-zinc-900 border border-zinc-700 p-4 rounded-xl hover:border-lime-400">

              <Heart />

            </button>

          </div>

          {/* Information */}

          <div className="mt-14 space-y-5">

            <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
              🚚 Free Shipping
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
              🔄 Easy Returns
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
              🔒 100% Secure Payments
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;