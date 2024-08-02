import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

import Card from './Card';
import singleProduct from './SingleProduct';
import { useParams } from 'react-router-dom';


 

const Product = () => {

    const[data,setData] =useState([])
    const params =useParams()

  //  console.log("id",params)

     useEffect(() => {

        axios.get(`https://fakestoreapi.com/products`)
        .then(function (res) {
          // handle success
        //   console.log(res.data);
          setData(res.data)
        // data.push(res.data)
        // setData([...data])
          console.log(data,"data form ")
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
     }, [])
     

  return (
    <div>

  <div>
    {/* hello i am product  {params.id} */}
  </div>

        <div className='flex gap-5 justify-center flex-wrap p-1 mt-5'>

        {data.length >0 ?data.map((item,index)=>{


        //    { const[image,id,title,description,price,rating,category] =item}

       return     <Card  image ={item.image} 
                    key={item.id}
                    id ={item.id}
                    title ={item.title}
                    price ={item.price}
                    category ={item.category}
                    rating ={item.rating}
            
            
            />



        }):<h1 >Loading....</h1>}
        </div>

        


    

    </div>
  )
}

export default Product