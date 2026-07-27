import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { ShoppingCart, LogOut, Menu, X } from "lucide-react";
import Cart from "./Cart";
import { MySupermart } from "../Context/MyContext";

const Navbar = () => {
  const { setCartOpen, SetcartProduct } = useContext(MySupermart);
  const [loggedOut, setLoggedOut] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;
  const userName = loggedUser?.name;

  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedOut(true);
    SetcartProduct([]);
    localStorage.removeItem("loggedInUser");
    setTimeout(() => {
      setLoggedOut(false);
      navigate("/");
    }, 1000);
  };

  return (
    <>
      <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
          {/* Logo */}

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-lime-400 flex items-center justify-center font-bold text-black text-xl">
              S
            </div>

            <h1 className="text-xl md:text-2xl font-bold text-lime-400">
              SuperMart
            </h1>
          </div>

          {/* Desktop Links */}

          <div className="hidden md:flex gap-10 text-gray-300">
            <NavLink to="/home" className="hover:text-lime-400">
              Home
            </NavLink>

            <NavLink to="/shop" className="hover:text-lime-400">
              Shop
            </NavLink>

            <NavLink to="/about" className="hover:text-lime-400">
              About
            </NavLink>
          </div>

          {/* Desktop Right */}

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setCartOpen(true)}
              className="bg-zinc-900 p-3 rounded-xl border border-zinc-700 hover:border-lime-400"
            >
              <ShoppingCart className="text-white" size={20} />
            </button>

            <button className="bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-700 text-white">
              {userName}
            </button>

            <button
              onClick={handleLogout}
              className="bg-lime-400 text-black px-4 py-2 rounded-xl flex items-center gap-2 font-semibold hover:bg-lime-300"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-6 py-5">
            <div className="flex flex-col gap-5">
              <NavLink
                to="/home"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-lime-400"
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-lime-400"
              >
                Shop
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-lime-400"
              >
                About
              </NavLink>

              <button
                onClick={() => {
                  setCartOpen(true);
                  setMenuOpen(false);
                }}
                className="flex items-center gap-3 text-white border border-zinc-700 rounded-xl p-3"
              >
                <ShoppingCart size={20} />
                Cart
              </button>

              <div className="text-white border border-zinc-700 rounded-xl p-3">
                👤 {userName}
              </div>

              <button
                onClick={handleLogout}
                className="bg-lime-400 text-black rounded-xl py-3 font-semibold flex justify-center items-center gap-2"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>

      <Cart />
      {loggedOut && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-lime-400 rounded-2xl p-8 w-[90%] max-w-md text-center shadow-2xl animate-bounce">
            <div className="w-20 h-20 mx-auto rounded-full bg-lime-400 flex items-center justify-center text-4xl text-black">
              👋
            </div>

            <h2 className="text-3xl font-bold text-white mt-6">Logged Out</h2>

            <p className="text-gray-400 mt-3">
              You have been logged out successfully.
            </p>

            <p className="text-lime-400 font-semibold mt-2">
              Come back soon! 💚
            </p>

            <button
              onClick={() => {
                setLoggedOut(false);
                navigate("/");
              }}
              className="mt-6 bg-lime-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-lime-300 transition"
            >
              Go to Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
