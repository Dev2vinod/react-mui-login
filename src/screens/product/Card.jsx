import React from 'react'
import { useNavigate } from 'react-router-dom'


const Card = ({title,id,price,category,description,rating,image,showBtn}) => {

    const navigate =useNavigate()
   function singleProductPage() {

    navigate(`/singleProduct/${id}`)
    
   }

  return (
    <>
     <div className='flex flex-wrap'>


    <div className="card bg-base-100 w-80 
     rounded p-2 shadow-xl bg-gray-800 object-fill ">
  <figure>
    <img
      src={image} className='w-[250px] mx-auto '
      alt="fakestoreapi" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Category {category}</h2>
    <p>title {title} </p>
    <p>price-- {price}</p>
    <p>count-- {rating.count}</p>
    <p>rate-- {rating.rate}</p>


   { showBtn ?  <div className="card-actions justify-end">
      <button className="bg-blue-500 px-5 p-1 mt-2 rounded-md " onClick={singleProductPage}>Show More</button>
    </div>:null}
   
  </div>
</div>
</div>

    
    
    </>
  )
}

export default Card