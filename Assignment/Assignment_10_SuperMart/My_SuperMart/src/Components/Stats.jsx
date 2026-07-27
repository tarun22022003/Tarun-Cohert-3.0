import React, {useContext} from "react";
import { MySupermart } from "../Context/MyContext";
import {
  ShoppingBag,
  Wallet,
  Star,
  LayoutGrid,
} from "lucide-react";

const Stats = () => {
   let {cartTotal,itemTotal } = useContext(MySupermart)
  const stats = [
    {
      icon: <ShoppingBag size={24} />,
      title: "Cart Items",
      value: `${itemTotal}`,
      desc: "Items in cart",
      color: "text-lime-400",
    },
    {
      icon: <Wallet size={24} />,
      title: "Cart Value",
      value: `${cartTotal}`,
      desc: "Ready to checkout",
      color: "text-sky-400",
    },
    {
      icon: <Star size={24} />,
      title: "Top Products",
      value: "10",
      desc: "Highly Rated",
      color: "text-yellow-400",
    },
    {
      icon: <LayoutGrid size={24} />,
      title: "Categories",
      value: "06",
      desc: "To Explore",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="bg-black py-6">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 hover:border-lime-400 transition duration-300 hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-black flex justify-center items-center ${item.color}`}
              >
                {item.icon}
              </div>

              <h1 className="text-white text-4xl font-bold mt-6">
                {item.value}
              </h1>

              <h2 className="text-white font-semibold mt-2">
                {item.title}
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;