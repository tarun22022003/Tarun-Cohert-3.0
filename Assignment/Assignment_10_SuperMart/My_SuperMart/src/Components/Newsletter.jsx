import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-black py-20">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h1 className="text-4xl text-white font-bold">

          Subscribe To Our Newsletter

        </h1>

        <p className="text-gray-400 mt-5">

          Get exclusive offers and updates directly in your inbox.

        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-lime-400"
          />

          <button className="bg-lime-400 text-black px-8 rounded-xl font-bold hover:bg-lime-300">

            Subscribe

          </button>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;