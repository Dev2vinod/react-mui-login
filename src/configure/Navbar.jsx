import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../screens/home/Home'

const Navbar = () => {
  return (

    <>
    <div>

  <nav>

     <ul className='flex  items-center justify-evenly mt-2'>

        <li>
         <Link to ='/' >
         
         Home
         </Link>
        </li>

        <li>
         <Link to ='about' >
         
         About
         </Link>
        </li>
        <li>
         <Link to ='contact' >
         
         Contact
         </Link>
        </li>
        <li>
         <Link to ='button' >
         
         button
         </Link>
        </li>
        <li>
         <Link to ='product' >
         
         Product
         </Link>
        </li>


     </ul>
  </nav>
    </div>
    

    </>

  )
}

export default Navbar