import { createContext, useState, useEffect } from "react";
import axios from "axios";

export let MySupermart = createContext();

export const ContextProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState([]);
  const [getProducts, SetGetProducts] = useState([]);

  const [cartTotal, SetcartTotal] = useState(0);
  const [itemTotal, SetitemTotal] = useState(0);

  const [cartOpen, setCartOpen] = useState(false);
  const [cartProduct, SetcartProduct] = useState(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) return [];
    return JSON.parse(localStorage.getItem(`cart_${user.email}`)) || [];
  });

  const fetchProducts = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");
      SetGetProducts(response.data);
    } catch (error) {
      alert("Loading...", error);
    }
  };

  useEffect(() => {
    fetchProducts()
  }, [])

useEffect(() => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));


  if (!user) return;

  localStorage.setItem(
    `cart_${user.email}`,
    JSON.stringify(cartProduct)
  );
}, [cartProduct]);

const loadCart = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) {
    SetcartProduct([]);
    return;
  }

  const savedCart =
    JSON.parse(localStorage.getItem(`cart_${user.email}`)) || [];

  SetcartProduct(savedCart);
};

  return (
    <MySupermart.Provider
      value={{
        loadCart,
        SetitemTotal,
        itemTotal,
        cartTotal,
        SetcartTotal,
        cartOpen,
        setCartOpen,
        getProducts,
        SetGetProducts,
        userDetail,
        cartProduct,
        SetcartProduct,
        setUserDetail,
      }}
    >
      {children}
    </MySupermart.Provider>
  );
};
