import { ShoppingCart, Heart, Star } from "lucide-react";
import { MyStore } from "../Context/MyContext";
import { useContext } from "react";

const ProductCard = ({ product}) => {
  let{setAddCart} = useContext(MyStore);
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">

      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
        />

        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition">
          <Heart size={20} />
        </button>
      </div>

      <div className="p-5">

        <span className="text-sm text-blue-600 font-semibold">
          {product.category}
        </span>

        <h2 className="font-bold text-xl mt-2 line-clamp-2">
          {product.name}
        </h2>

        <div className="flex items-center gap-1 mt-3">
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
          <span>{product.rating}</span>
        </div>

        <div className="flex justify-between items-center mt-5">

          <h1 className="text-2xl font-bold text-green-600">
            ₹{product.price}
          </h1>

          <button onClick={()=>setAddCart(prev => [...prev, product])} className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition">
            <ShoppingCart size={18} />
            Add
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;