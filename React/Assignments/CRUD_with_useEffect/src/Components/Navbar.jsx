import React , {useContext} from "react";
import { MyStore } from "../Context/MyContext";
const Navbar = () => {
  let {setToggle} = useContext(MyStore)
  return (
    <div className="p-4 bg-blue-300 border-2 rounded solid flex items-center justify-between">
      <h1>USERS</h1>
      <div className="flex gap-10  font-semibold ">
        <p onClick={()=> setToggle(true)} className="cursor-pointer">HOME</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
      </div>
      <button onClick={()=> setToggle(false)}className="p-2 bg-blue-700 text-white cursor-pointer rounded -4">
        Product_Cart
      </button>
    </div>
  );
};

export default Navbar;
