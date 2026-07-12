import React from "react";
import { useForm } from "react-hook-form";
import {nanoid} from "nanoid";
const Form = ({ setUsers, setToggle, users,updatedData }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange", 
    defaultValues:updatedData, // this will enable any error on real time basis!
  });

  let formSubmit = (data) => {
    if(updatedData){
      setUsers((prev)=>{
        return prev.map((val)=>{
          return val.id === updatedData.id ? {...data} : val;
        })
      })
      localStorage.setItem("users", JSON.stringify(updatedData));
    }
    else{
    let dataArr = [...users, {...data, id: nanoid()}]; // this is created to save current data in local storage as when kept directly in setUsers this process after data is saved in local storage
    setUsers(dataArr);
    localStorage.setItem("users", JSON.stringify(dataArr));
    }
    reset();
    setToggle((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-6 items-center">
      <h1>Create User</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-90 flex flex-col gap-3 p-4 rounded  border-2 black"
        action=""
      >
        <input
          {...register("name", {
            required: "Name is required",
          })}
          className="p-2 rounded border-2 black"
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          {...register("email", {
            required: "email is required",
          })}
          className="p-2 rounded border-2 black"
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register("mobile", {
            required: "mobile is required",
            minLength: {
              value: 10,
              message: "Minimum 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits are required",
            },
          })}
          className="p-2 rounded border-2 black"
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && (
          <p className="text-red-500">{errors.mobile.message}</p>
        )}
        <input
          {...register("image", {
            required: "image is required",
          })}
          className="p-2 rounded border-2 black"
          type="url"
          placeholder="Image"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        <button className="text-white bg-blue-700 p-2 rounded border-2 border-black">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
