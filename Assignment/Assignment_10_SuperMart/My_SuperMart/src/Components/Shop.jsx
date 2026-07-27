import React, { useContext, useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { MySupermart } from "../Context/MyContext";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Shop = () => {
  const { getProducts} = useContext(MySupermart);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const categories = [
    "All",
    ...new Set(getProducts.map((item) => item.category)),
  ];

  const filteredProducts = useMemo(() => {
    let products = [...getProducts];

    products = products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
    if (category !== "All") {
      products = products.filter((item) => item.category === category);
    }
    switch (sort) {
      case "low":
        products.sort((a, b) => a.price - b.price);
        break;

      case "high":
        products.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        products.sort((a, b) => b.rating.rate - a.rating.rate);
        break;

      default:
        break;
    }

    return products;
  }, [getProducts, search, category, sort]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      <div className="max-w-[1300px] mx-auto px-8 py-10">
        {/* Heading */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">All Products</h1>

          <p className="text-gray-400 mt-2 text-lg">
            {filteredProducts.length} Products Available
          </p>
        </div>

        {/* Filters */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col lg:flex-row gap-5 justify-between mb-10">
          {/* Search */}

          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
            />

            <input
              type="text"
              placeholder="Search Products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-lime-400"
            />
          </div>

          {/* Category */}

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-black border border-zinc-700 rounded-xl px-5 py-3 outline-none focus:border-lime-400"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Sort */}

          <div className="flex items-center gap-3">
            <SlidersHorizontal className="text-lime-400" />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-black border border-zinc-700 rounded-xl px-5 py-3 outline-none focus:border-lime-400"
            >
              <option value="">Featured</option>
              <option value="low">Price : Low → High</option>
              <option value="high">Price : High → Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Products */}

        {filteredProducts.length > 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
    {filteredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
) : (
  <div className="flex flex-col items-center justify-center py-20 text-center">
    <img
      src="https://cdn-icons-png.flaticon.com/512/7486/7486807.png"
      alt="No Products"
      className="w-40 h-40 opacity-70"
    />

    <h2 className="mt-6 text-3xl font-bold text-white">
      No Products Found
    </h2>

    <p className="mt-2 text-gray-400 text-lg">
      We couldn't find any products matching{" "}
      <span className="text-lime-400 font-semibold">
        "{search}"
      </span>
    </p>

    <button
      onClick={() => {
        setSearch("");
        setCategory("All");
        setSort("");
      }}
      className="mt-6 bg-lime-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-lime-300 transition"
    >
      Clear Filters
    </button>
  </div>
)}
      </div>
      <Footer/>
    </div>
  );
};

export default Shop;
