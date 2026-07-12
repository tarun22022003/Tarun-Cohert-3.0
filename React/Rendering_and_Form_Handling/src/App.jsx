import React ,{useState} from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  const [toggle, setToggle] = useState(true)
  const [login, setLogin] = useState(false)

  return (
    <div className='p-5 h-screen w-screen bg-cyan-400'>
      <Navbar setLogin={setLogin}/>
      <div className={`${login?"":"hidden"}`}>
      <div className=' left-140 top-50 absolute'>
        {toggle?<Login setToggle={setToggle} />:<Register setToggle={setToggle}/>}
      </div>
      </div>
    </div>
  )
}

export default App
