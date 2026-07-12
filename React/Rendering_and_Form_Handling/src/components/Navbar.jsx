import React from 'react'

const Navbar = ({setLogin}) => {

  return (
    <div className='flex justify-between items-center border-2 black bg-teal-200 rounded-lg p-2'>
      <div className='border-2 bg-amber-200 text-white border-black rounded-lg p-1'>
        <h2>logo</h2>
      </div>
      <div className='flex justify-center gap-5 items-center'>
        <p>Home</p>
        <p>About</p>
        <p>Contact Us</p>
      </div>
      <div>
        <button onClick={()=> setLogin((prev)=> !prev)} className='border-2 bg-blue-500 text-white cursor-pointer border-black rounded-lg p-1'>Login/Create_User</button>
      </div>
    </div>
  )
}

export default Navbar
