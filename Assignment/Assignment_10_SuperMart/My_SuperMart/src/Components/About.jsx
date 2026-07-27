import React from "react";
import { useNavigate } from "react-router";
import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  Star,
  ArrowRight,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      {/* Hero Section */}

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lime-400 uppercase tracking-[6px] font-semibold">
            About SuperMart
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            Shopping Made
            <span className="text-lime-400"> Smarter.</span>
          </h1>

          <p className="text-gray-400 text-lg mt-8 max-w-3xl mx-auto leading-8">
            SuperMart is a modern online shopping platform built to make
            discovering quality products simple, fast, and enjoyable. From
            electronics to fashion, we bring thousands of trusted products
            together in one place.
          </p>
        </div>
      </section>

      {/* Our Story */}

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold">Our Story</h2>

            <p className="text-gray-400 mt-6 leading-8">
              SuperMart started with one simple goal—to create a shopping
              experience that's fast, reliable, and enjoyable.
            </p>

            <p className="text-gray-400 mt-6 leading-8">
              Whether you're looking for the latest gadgets, stylish clothing,
              or everyday essentials, our platform helps you find what you need
              with ease.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-lime-400">Our Mission</h2>

            <p className="text-gray-400 mt-5 leading-8">
              To make online shopping accessible, affordable, and trustworthy
              for everyone by offering quality products and a smooth shopping
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center">
            Why Choose SuperMart?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-lime-400 transition">
              <Truck className="text-lime-400" size={40} />

              <h3 className="text-2xl font-semibold mt-6">Fast Delivery</h3>

              <p className="text-gray-400 mt-4">
                Quick and reliable shipping on every order.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-lime-400 transition">
              <ShieldCheck className="text-lime-400" size={40} />

              <h3 className="text-2xl font-semibold mt-6">Secure Payments</h3>

              <p className="text-gray-400 mt-4">
                Safe and trusted payment methods.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-lime-400 transition">
              <ShoppingBag className="text-lime-400" size={40} />

              <h3 className="text-2xl font-semibold mt-6">Huge Collection</h3>

              <p className="text-gray-400 mt-4">
                Browse products across multiple categories.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-lime-400 transition">
              <Star className="text-lime-400" size={40} />

              <h3 className="text-2xl font-semibold mt-6">Top Rated</h3>

              <p className="text-gray-400 mt-4">
                Products loved and trusted by customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 text-center">
            <h1 className="text-5xl font-bold text-lime-400">20K+</h1>

            <p className="mt-4 text-gray-400">Products</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 text-center">
            <h1 className="text-5xl font-bold text-lime-400">50K+</h1>

            <p className="mt-4 text-gray-400">Happy Users</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 text-center">
            <h1 className="text-5xl font-bold text-lime-400">150+</h1>

            <p className="mt-4 text-gray-400">Brands</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 text-center">
            <h1 className="text-5xl font-bold text-lime-400">4.9★</h1>

            <p className="mt-4 text-gray-400">Customer Rating</p>
          </div>
        </div>
      </section>

      {/* Browse Products CTA */}

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-lime-400 to-green-500 rounded-3xl p-14 text-center">
          <h1 className="text-5xl font-bold text-black">
            Ready to Start Shopping?
          </h1>

          <p className="text-black text-lg mt-6 max-w-2xl mx-auto">
            Explore thousands of products across different categories and
            discover great deals every day.
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="mt-10 bg-black text-white px-10 py-4 rounded-xl font-semibold flex items-center gap-3 mx-auto hover:bg-zinc-900 transition"
          >
            Browse Products
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
