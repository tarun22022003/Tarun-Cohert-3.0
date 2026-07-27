import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const PromoBanner = () => {
  let navigate = useNavigate();
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-lime-400 to-green-500 rounded-3xl p-12 flex flex-col lg:flex-row justify-between items-center">

          <div>

            <p className="uppercase tracking-widest text-black font-semibold">
              Limited Time Offer
            </p>

            <h1 className="text-5xl font-bold text-black mt-3">
              Up To 70% OFF
            </h1>

            <p className="text-black mt-5 text-lg max-w-xl">
              Discover amazing deals on electronics, fashion,
              accessories and much more.
            </p>

          </div>

          <button onClick={()=>{
            navigate("/Shop")
          }} className="mt-8 lg:mt-0 bg-black text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-zinc-900">

            Shop Now

            <ArrowRight />

          </button>

        </div>
      </div>
    </section>
  );
};

export default PromoBanner;