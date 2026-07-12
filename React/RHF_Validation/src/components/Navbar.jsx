import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="p-4 bg-blue border-2 solid flex items-center justify-between">
      <h1>USERS</h1>
      <div className="flex gap-10  font-semibold ">
        <p className="">HOME</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
      </div>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="p-2 bg-blue-700 text-white cursor-pointer rounded -4"
      >
        Create User
      </button>
    </div>
  );
};

export default Navbar;
