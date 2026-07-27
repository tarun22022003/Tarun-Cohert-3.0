import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router";
import { MySupermart } from "../Context/MyContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Login = () => {
  let { loadCart } = useContext(MySupermart);
  const users = JSON.parse(localStorage.getItem("users")) || [];
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      loadCart();
      navigate("/home");
    }
  }, []);

  let formSubmit = (data) => {
    const user = users.find(
      (u) => u.email === data.email && u.password === data.password,
    );

    if (!user) {
      alert("Username or Password doesn't match");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    loadCart();

    navigate("/home");
    reset();
  };

  return (
    <div className="min-h-screen flex bg-black">
      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white p-12 flex-col justify-between border-r border-zinc-800">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-lime-400 text-black flex items-center justify-center text-2xl font-bold shadow-[0_0_25px_#a3e635]">
            S
          </div>
          <h1 className="text-3xl font-bold tracking-wide">SuperMart</h1>
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-xl font-bold text-lime-400 drop-shadow-[0_0_15px_#a3e635]">
            Welcome Back
          </h1>

          <p className="text-5xl font-semibold mt-3">Shop the future.</p>

          <p className="text-5xl font-bold text-lime-400 drop-shadow-[0_0_15px_#a3e635]">
            Today.
          </p>

          <p className="mt-10 text-lg text-gray-400 max-w-lg leading-6">
            Thousands of products, lightning-fast delivery, and prices that make
            your wallet happy. Discover the latest collections and enjoy
            seamless shopping from anywhere.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 text-center hover:border-lime-400 transition duration-300">
            <h2 className="text-3xl font-bold text-lime-400">20K+</h2>
            <p className="text-gray-300 mt-2">Products</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 text-center hover:border-lime-400 transition duration-300">
            <h2 className="text-3xl font-bold text-lime-400">50K+</h2>
            <p className="text-gray-300 mt-2">Users</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 text-center hover:border-lime-400 transition duration-300">
            <h2 className="text-3xl font-bold text-lime-400">4.9★</h2>
            <p className="text-gray-300 mt-2">Rating</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center p-6 bg-black">
        <div className="w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-3xl shadow-[0_0_35px_rgba(255,255,255,0.08)] p-10">
          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-white">Sign In</h2>
            <p className="text-gray-400 mt-2">
              Enter your credentials to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(formSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block mb-2 text-gray-300 font-medium">
                Email Address
              </label>

              <input
                {...register("email", {
                  required: "Enter your Login Email",
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-all"
              />
            </div>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            {/* Password */}
            <div>
              <label className="block mb-2 text-gray-300 font-medium">
                Password
              </label>

              <div className="relative">
                <input
                  {...register("password", {
                    required: "Enter your Login password",
                  })}
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 pr-12 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-all"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}

                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-lime-400 transition"
                ></button>
              </div>
            </div>

            {/* Sign In */}
            <button className="w-full py-3 rounded-xl bg-lime-400 text-black font-bold text-lg hover:bg-lime-300 shadow-[0_0_20px_#a3e635] hover:shadow-[0_0_35px_#a3e635] transition-all duration-300">
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-zinc-700"></div>

            <span className="mx-4 text-gray-500 text-sm">OR</span>

            <div className="flex-1 border-t border-zinc-700"></div>
          </div>

          {/* Sign Up */}
          <div className="text-center">
            <span className="text-gray-400">Don't have an account? </span>

            <NavLink to={"/register"}>
              <button className="text-lime-400 cursor-pointer font-semibold hover:text-lime-300 transition">
                Create one
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
