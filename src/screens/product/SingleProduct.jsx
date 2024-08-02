
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Card from './Card'
const SingleProduct = () => {

 const params =useParams()
 console.log(params,"<---parasm")

 const [data, setData] = useState(null)


      
     useEffect(() => {

      axios.get(`https://fakestoreapi.com/products/${params.id}`)
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

   <>
    <div className='flex justify-center items-center '>

    {data ? <Card   title={data.title} 
                    description={data.description}
                    price={data.price}
                    rating={data.rating}
                    category={data.category}
                    image ={data.image}
    
    /> :<h1>loading</h1>}

</div>

   </>

  )
}

export default SingleProduct