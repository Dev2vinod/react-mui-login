import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'
import About from '../screens/about/About'
import Contact from '../screens/contact/Contact'
import Navbar from './Navbar'
import Button from '../componets/Button'
import Product from '../screens/product/Product'

const Router = () => {




  return (


    <div>

   < BrowserRouter>
  
   <Navbar />

   <Routes>

    <Route path='/'  element ={<Home /> }  />
    <Route path='about'  element ={<About /> }  />
    <Route path='contact'  element ={<Contact /> }  />
    <Route path='button'  element ={<Button /> }  />
    <Route path='product'  element ={<Product /> }  />


    
   </Routes>
   
   
   
   </BrowserRouter>



    </div>
  )
}

export default Router