import React from 'react'

const Login = ({setToggle}) => {
   
  let changePage = ()=> setToggle((prev)=>!prev)
  return (
    <div className ="bg-white w-90 p-6 rounded-xl flex flex-col gap-4">
      <h3>Login</h3>
    <form className="flex flex-col gap-4" action="">
     <input className="p-2 border border-gray-400 rounded" type="text" placeholder='Email' />
     <input className="p-2 border border-gray-400 rounded" type="text" placeholder='password' />
     <button className = "p-2 bg-blue-600 text-white rounded">Login</button>
    </form>
    <p>Didn't have an account? <span onClick={changePage} className="text-blue-600 cursor-pointer">Register here!</span></p>
    </div>
  )
}

export default Login
