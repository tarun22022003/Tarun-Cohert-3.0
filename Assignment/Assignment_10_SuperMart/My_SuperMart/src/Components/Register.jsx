import React from "react";
import { NavLink } from "react-router";
import { MySupermart } from "../Context/MyContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router";


const Register = () => {
  let { setUserDetail, userDetail } = useContext(MySupermart);
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  let pastUser = JSON.parse(localStorage.getItem("users")) || [];
  let flag = false;
  let checkPastUser = (data) => {
    pastUser.map((val) => {
      if (data.email === val.email) {
        alert("Email already registered!");
        flag = true;
      }
    });
  };

  let formSubmit = (data) => {
    
    checkPastUser(data);
    if(flag===true) 
      {return;}
    else{
    if (data.password === data.confirm_password) {
      let dataArr = { ...data, id: nanoid() };
      const updatedUser = [...userDetail, dataArr];

      setUserDetail(updatedUser);
      localStorage.setItem("users", JSON.stringify(updatedUser));
      navigate("/home");
      reset();
    } else {
      alert("Password and Confirm Password does not match!");
      reset();
    }
  };
  }
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(163,230,53,0.08)] grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-black via-zinc-950 to-zinc-900 p-12 border-r border-zinc-800">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-lime-400 flex items-center justify-center text-black text-2xl font-bold shadow-[0_0_20px_#A3E635]">
              S
            </div>

            <h1 className="text-3xl text-white font-bold tracking-wide">
              SuperMart
            </h1>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-5xl text-white font-bold leading-tight">
              Join The
            </h1>

            <h1 className="text-5xl font-bold text-lime-400 mt-2 drop-shadow-[0_0_12px_#A3E635]">
              Future Of Shopping
            </h1>

            <p className="mt-8 text-gray-400 leading-8 text-lg">
              Create your free account and explore thousands of products,
              exclusive deals, secure payments and lightning-fast delivery.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-lime-400 transition">
              <h2 className="text-lime-400 text-3xl font-bold">20K+</h2>
              <p className="text-gray-400 mt-2">Products</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-lime-400 transition">
              <h2 className="text-lime-400 text-3xl font-bold">50K+</h2>
              <p className="text-gray-400 mt-2">Happy Users</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-zinc-900 p-8 sm:p-10 lg:p-12">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-lime-400 flex items-center justify-center text-black font-bold text-xl">
              S
            </div>

            <h1 className="text-3xl text-white font-bold">SuperMart</h1>
          </div>

          <h2 className="text-4xl font-bold text-white">Create Account</h2>

          <p className="text-gray-400 mt-2 mb-8">
            Join SuperMart and start shopping today.
          </p>

          <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-2">Full Name</label>

              <input
                {...register("name", {
                  required: "Name is Required",
                })}
                type="text"
                placeholder="Enter your name"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition"
              />
            </div>
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>

              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition"
              />
            </div>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            {/* Password */}
            <div>
              <label className="block text-gray-300 mb-2">Password</label>

              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 5,
                    message: "Minimum 5 digit are required",
                  },
                })}
                type="password"
                placeholder="Create password"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition"
              />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-300 mb-2">
                Confirm Password
              </label>

              <input
                {...register("confirm_password", {
                  required: "Confirm_password is required",
                  minLength: {
                    value: 5,
                    message: "Minimum 5 digit are required",
                  },
                })}
                type="password"
                placeholder="Confirm password"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition"
              />
            </div>
            {errors.confirm_password && (
              <p className="text-red-500">{errors.confirm_password.message}</p>
            )}

            {/* Button */}
            <button className="w-full bg-lime-400 hover:bg-lime-300 text-black font-bold py-3 rounded-xl shadow-[0_0_20px_#A3E635] hover:shadow-[0_0_35px_#A3E635] transition duration-300">
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <span className="text-gray-400">Already have an account?</span>

            <NavLink to={"/"}>
              {" "}
              <button className="ml-2 cursor-pointer text-lime-400 font-semibold hover:text-lime-300 transition">
                Sign In
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
