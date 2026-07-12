import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Register = ({ setToggle }) => {
  let changePage = () => setToggle((prev) => !prev);
  const [dataStore, setDataStore] = useState([]);
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  let formSubmit =((data)=>{
    setDataStore(dataStore.push(data));
        console.log(dataStore);
    reset();

    
  })

  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gap-4">
      <h3>Register </h3>
      <form 
      onSubmit={handleSubmit(formSubmit)}
      className="flex flex-col gap-4" action="">
        <input
        {...register("name",{
          required:"Name is Required"
        })}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="color-red-500">{errors.name.message}</p>}
        <input
        {...register("email", {
          required:"Email is required"
        })}
          className="p-2 border border-gray-400 rounded"
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="color-red-500">{errors.email.message}</p>}
        <input
        {...register("password", {
          required:"Password is required"
        })}
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="password"
        />
        {errors.password && <p className="color-red-500">{errors.password.message}</p>}
        <button className="p-2 bg-blue-600 text-white rounded">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <span onClick={changePage} className="text-blue-600 cursor-pointer">
          Login here!
        </span>
      </p>
    </div>
  );
};

export default Register;
