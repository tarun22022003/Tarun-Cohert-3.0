import React from 'react'
import Login from '../Components/login'
import { Route, Routes } from "react-router";
import Register from '../Components/Register';
import Home from '../Components/Home';
import ProtectedRoute from './ProtectedRoute';
import Shop from '../Components/Shop';
import About from '../Components/About';
import ProductDetails from '../Components/ProductDetails';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Shop" element={<Shop/>}></Route>
        <Route path="/shop/product/:id" element={<ProductDetails />} />
        <Route path="/About" element={<About/>}></Route>
        <Route path= "/register" element={<Register/>}></Route>
        <Route path='/home' element ={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        }></Route>
      </Routes>
    </div>
  )
}

export default AppRoutes

