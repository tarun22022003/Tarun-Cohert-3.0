import React from "react";
import {
  Laptop,
  Shirt,
  Sofa,
  Home,
  Dumbbell,
  Watch,
} from "lucide-react";
import { useNavigate } from "react-router";

const Categories = () => {
 let navigate = useNavigate();
  const category = [
    {
      icon: <Laptop size={35} />,
      name: "Electronics",
      items: "6 Items",
    },
    {
      icon: <Shirt size={35} />,
      name: "Clothing",
      items: "9 Items",
    },
    {
      icon: <Sofa size={35} />,
      name: "Furniture",
      items: "0 Items",
    },
    {
      icon: <Home size={35} />,
      name: "Home",
      items: "0 Items",
    },
    {
      icon: <Dumbbell size={35} />,
      name: "Sports",
      items: "0 Items",
    },
    {
      icon: <Watch size={35} />,
      name: "Accessories",
      items: "5 Items",
    },
  ];

  return (
    <section className="bg-black py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold text-white">
            Shop by Category
          </h1>

          <button onClick={()=>{
            navigate("/Shop")
          }} className="text-lime-400 hover:text-lime-300">
            View All →
          </button>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

          {category.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 flex flex-col items-center hover:border-lime-400 transition duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="bg-black w-16 h-16 rounded-full flex justify-center items-center text-lime-400">
                {item.icon}
              </div>

              <h2 className="text-white font-semibold mt-5">
                {item.name}
              </h2>

              <p className="text-gray-500 text-sm">
                {item.items}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Categories;