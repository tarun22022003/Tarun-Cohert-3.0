import React, { useState } from "react";

import Navbar from "./components/navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";
const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || [],
  );

  const deleteUser = (Id) => {
    let filterUser = users.filter((val,index)=>{
      return index !== Id;
    })
    console.log(Id);
    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  };


  const [updatedData, setUpdatedData] = useState(null)
  return (
    <div className=" p-4 flex flex-col gap-4">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex gap-4 flex-wrap ">
          {users.map((elem) => {
            return (
              <Usercard
              setUpdatedData={setUpdatedData}
                deleteUser={deleteUser}
                key={elem.id}
                setToggle={setToggle}
                user={elem}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          <Form updatedData={updatedData} users={users} setUsers={setUsers} setToggle={setToggle} />
        </div>
      )}
    </div>
  );
};

export default App;
