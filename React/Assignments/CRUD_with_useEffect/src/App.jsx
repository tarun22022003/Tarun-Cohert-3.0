import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import Cart from "./Components/Cart";
import { MyStore } from "./Context/MyContext";

const App = () => {
  const [productData, setProductData] = useState([]);
 let {toggle, addToCart} = useContext(MyStore);
  
  const getProduct = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");
      setProductData(response.data);
    } catch (error) {
      console.log("There's an error", error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="p-5 flex flex-col gap-4">
      <Navbar />
      {toggle ? (
      <div className="grid grid-cols-4 gap-5">
        {productData.map((elem) => {
          let isIncart = addToCart.find((val)=> val.id===elem.id);
          return <ProductCard key={elem.id} product={elem} isIncart={isIncart} />;
        })}
      </div>):
      (
        <Cart />
      )
      }
    </div>
  );
};

export default App;
