import React, {useContext, useEffect}from 'react'
import { Mypage } from "../MyContext/Context";
import axios from "axios";
import ProductCard from './ProductCard';
const Home = () => {

  let {getProducts, setGetProducts} = useContext(Mypage);

  let getProductData = async () => {
    try {
      let response = await axios.get('https://fakestoreapi.com/products');
      setGetProducts(response.data);
      console.log(getProducts);
      
    } catch (error) {
      console.log("Error in API", error);
      
    }
  };

  useEffect(()=>{
    getProductData();
  },[]);
  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {getProducts.map((val)=>{
        return<ProductCard key={val.id} product={val}/>
      })}
    </div>
  )
}

export default Home
