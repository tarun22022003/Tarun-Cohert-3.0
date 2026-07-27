import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="p-4 bg-blue-500 border-2 solid flex items-center justify-between">
      <h1>USERS</h1>
      <div className="flex gap-10  font-semibold ">
        <NavLink to ="/">Home</NavLink>
        <NavLink to ="/About">About</NavLink>
        <NavLink to ="/Contact">Contact</NavLink>
      </div>
      <button
        className="p-2 bg-blue-700 text-white cursor-pointer rounded -4"
      >
        Cart
      </button>
    </div>
  );
};

export default Navbar;
