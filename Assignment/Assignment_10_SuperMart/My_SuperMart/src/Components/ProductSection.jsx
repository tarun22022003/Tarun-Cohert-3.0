import React, {useContext} from "react";
import ProductCard from "./ProductCard";
import { MySupermart } from "../Context/MyContext";
import { useNavigate } from "react-router";

const ProductSection = ({ title }) => {
  let navigate = useNavigate();

      let {getProducts} = useContext(MySupermart);
  return (
    <section className="bg-black py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold text-white">
            {title}
          </h1>

          <button onClick={()=>{
            navigate("/Shop")
          }} className="text-lime-400 cursor-pointer hover:text-lime-300">
            View All →
          </button>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {getProducts.slice(0,4).map((product)=>(
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProductSection;