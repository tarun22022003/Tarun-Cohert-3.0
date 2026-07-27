import Cart from "./Components/Cart";
import Navbar from "./Components/navbar";
import ProductCard from "./Components/ProductCard";
import { useContext } from "react";
import { MyStore } from "./Context/MyContext";
const App = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 2499,
      category: "Electronics",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    },
    {
      id: 2,
      name: "Gaming Mechanical Keyboard",
      price: 3999,
      category: "Electronics",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600",
    },
    {
      id: 3,
      name: "Smart Watch Pro",
      price: 6999,
      category: "Wearables",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
    },
    {
      id: 4,
      name: "Running Shoes",
      price: 2999,
      category: "Fashion",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    },
    {
      id: 5,
      name: "DSLR Camera",
      price: 45999,
      category: "Photography",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
    },
    {
      id: 6,
      name: "Laptop Backpack",
      price: 1799,
      category: "Accessories",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    },
    {
      id: 7,
      name: "Apple iPhone 16",
      price: 79999,
      category: "Mobiles",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    },
    {
      id: 8,
      name: "Office Chair",
      price: 8999,
      category: "Furniture",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1505843490701-5be5d6f8a8e0?w=600",
    },
  ];
  let {toggle} = useContext(MyStore);
  return (
    <div className="p-5 flex flex-col gap-4" >
      <Navbar />
      {toggle ? (
        <div className="grid grid-cols-4 gap-4">
         { products.map((val)=>{
          return <ProductCard key={val.id} product={val}  />
          })}
          
        </div>
      ) : (
        <div>
          <Cart />
        </div>
      )}
    </div>
  );
};

export default App;
