import React, { useState } from "react";

const Register = ({ setToggle, setUsers }) => {
  const [formData, setFormData] = useState({});


  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prev)=> [...prev, formData]);
    setFormData({
        name:"",
        email:"",
        password:""
    });
  };
  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gap-4">
      <h3>Register </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
        <input
        value={formData.name}
        required
          name = "name"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Name"
        />
        <input
        required
        value={formData.email}
          name = "email"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Email"
        />
        <input
        required
        value={formData.password}
          name ="password"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="password"
        />
        <button className="p-2 bg-blue-600 text-white rounded">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <span
          onClick={() => {
            setToggle((prev) => !prev);
          }}
          className="text-blue-600 cursor-pointer"
        >
          Login here!
        </span>
      </p>
    </div>
  );
};

export default Register;
