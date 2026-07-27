import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const Hero = () => {
  let navigate = useNavigate();
  let loggedUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;
  const userName = loggedUser?.name;
  return (
    <section className="bg-black text-white py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="border border-zinc-700 rounded-3xl bg-zinc-900 p-10 flex flex-col lg:flex-row justify-between items-center">

          <div>

            <p className="uppercase tracking-widest text-lime-400 text-sm">
              Good Evening 👋
            </p>

            <h1 className="text-6xl font-bold mt-4">
              Welcome Back,
            </h1>

            <h2 className="text-6xl font-bold text-lime-400">
              {userName}
            </h2>

            <p className="mt-6 text-gray-400 max-w-xl leading-8">
              Discover today's best products with exciting offers,
              premium quality and lightning-fast delivery.
            </p>

            <div className="flex gap-4 mt-10">

              <button onClick={()=>{
                navigate("/Shop")
              }} className="bg-lime-400 text-black px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-lime-300">

                Shop Now

                <ArrowRight size={20} />

              </button>

              <button onClick={()=>{
                navigate("/Shop")
              }} className="border border-zinc-700 px-8 py-4 rounded-xl hover:border-lime-400">

                View Products

              </button>

            </div>

          </div>

          {/* Right Cards */}

          <div className="flex flex-col gap-5 mt-10 lg:mt-0">

            <div className="bg-lime-400 rounded-2xl text-black p-6 w-44">

              <h1 className="text-4xl font-bold">
                20+
              </h1>

              <p>Products Available</p>

            </div>

            <div className="border border-zinc-700 rounded-2xl p-6 w-44">

              <h1 className="text-3xl font-bold text-lime-400">
                FREE
              </h1>

              <p className="text-gray-400">
                Delivery
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;