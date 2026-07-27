import React from 'react'

import { Routes, Route} from "react-router";
import Home from '../Components/Home';
import Contact from '../Components/Contact';
import Products from '../Components/ProductDetails';
import About from '../Components/About';
import ProductDetails from '../Components/ProductDetails';
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<Home/>}></Route>
        <Route path='/Contact' element= {<Contact/>}></Route>
        <Route path='/Product' element= {<Products/>}></Route>
        <Route path='/About' element= {<About/>}></Route>
        <Route path='/detail/:id' element= {<ProductDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
