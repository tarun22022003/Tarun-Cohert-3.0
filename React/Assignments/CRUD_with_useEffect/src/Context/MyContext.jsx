import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({children})=>{

const [toggle, setToggle] = useState(true);
  const [addToCart, setAddToCart] = useState([])

  const increaseQuant = (id)=>{
   setAddToCart((prev)=>{
    return prev.map((val)=>{
      return val.id === id ? {...val, quantity: val.quantity + 1}: val;
    })
   })
   
  }
  const decreaseQuant = (id)=>{
   setAddToCart((prev)=>{
    return prev.map((val)=>{
      return val.id === id ? {...val, quantity: val.quantity - 1}: val;
    })
    .filter((val)=> val.quantity>0)
   })
   
  }
return <MyStore.Provider value={{toggle, setToggle, addToCart, decreaseQuant, increaseQuant, setAddToCart}}>{children}</MyStore.Provider>;
}