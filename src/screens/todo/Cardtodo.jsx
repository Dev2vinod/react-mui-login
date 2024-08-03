import React from 'react'

const Cardtodo = ({data,id,deleteBtn}) => {


    function editBtn(id){
        console.log("editbtn",id)
    }



  return (
    <>
    
    
    <div className='bg-slate-800 w-[60%] mx-auto flex flex-col mt-4 p-2  '>

        <div className='flex items-center justify-between'>
           <p>
           {data}
            </p> 
            <div>
            <button className='bg-green-500 hover:bg-gray-400 p-1 px-5 m-1'  onClick={()=>editBtn(id)}>Edit</button>


            <button  className='bg-red-500 hover:bg-red-400 p-1 px-5 m-1' onClick={()=>deleteBtn(id)}  >Delete</button>

                </div> 
        </div>

    </div>
    
    </>
  )
}

export default Cardtodo