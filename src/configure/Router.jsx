import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'
import About from '../screens/about/About'
import Contact from '../screens/contact/Contact'
import Navbar from './Navbar'
import Button from '../componets/Button'
import Product from '../screens/product/Product'
import SingleProduct from '../screens/product/SingleProduct'
import Todo from '../screens/todo/Todo'

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
    <Route path='singleProduct/:id'  element ={<SingleProduct /> }  />
    <Route path='todo'  element ={<Todo/> }  />


    
   </Routes>
   
   
   
   </BrowserRouter>



    </div>
  )
}

export default Router