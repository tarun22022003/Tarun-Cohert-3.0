import { createContext, useState } from "react";

// setup out blank store---
export const MyStore = createContext();

// make a provider of our store who handle data
//  and serves to the customers
export const ContextProvider = ({ children }) => {
  const [centralValue, setCentralValue] = useState("me context se hu");
  const [cartItems, setCartItems] = useState([]);

  return (
    <MyStore.Provider value={{ centralValue, cartItems, setCartItems }}>
      {children}
    </MyStore.Provider>
  );
};