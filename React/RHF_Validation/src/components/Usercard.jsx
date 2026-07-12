import React from "react";

const Usercard = ({ user, setToggle, deleteUser, setUpdatedData}) => {
  return (
    <div className=" p-4 border-2 black rounded  flex  flex-col gap-2">
      <div className="h-50 w - 50">
        <img className="object-cover h-full w-full" src={user.image} alt="" />
      </div>
      <div className="flex flex-col gap-1">
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.mobile}</p>
      </div>
      <div className="flex justify-between w-full gap-4">
        <button
          onClick={() => {setUpdatedData(user);
            setToggle((prev) => !prev)}}
          className="bg-yellow-700 text-black rounded p-2"
        >
          Update
        </button>
        <button
          onClick={() => {
            deleteUser(user.id);
          }}
          className="bg-red-700 text-black rounded p-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;
