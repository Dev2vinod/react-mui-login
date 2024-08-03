import React from 'react';
import { useState,useRef } from 'react';
import Cardtodo from './Cardtodo';

const Todo = () => {

 const [todos, setTodos] = useState([])
 const inputVal  = useRef("")

 function addTodofun(e){
    e.preventDefault()
  
    todos.push(inputVal.current.value)

    setTodos([...todos])
    
    console.log("hello",inputVal.current.value)

    console.log(todos,"todsos")

    inputVal.current.value =''



 }

  function deleteBtn(id) {
      
      todos.splice(id,1)
      setTodos([...todos])
      console.log("deldet btn",id,todos)
    
  }





  return (


    <>
     <h1>
        Todo app
     </h1>
    <div className='flex justify-center items-center'>



        <div  >

        <input type="text"  className='text-blue-600 ps-2' placeholder='enter the todo' ref={inputVal}  />
        <button className='bg-blue-500 px-6 p-1 m-1' onClick={addTodofun} >Add todo</button>

        </div>


          
    </div>

            <div>
            { todos.length ? todos.map((item,index)=>{

               { console.log(item,"loop ke andar")}
               return  <Cardtodo  data ={item} 
                   key= {index}
                   id ={index} 
                   deleteBtn ={deleteBtn}  
                 
               />
            }) : <h1 className='text-2xl font-extrabold'>No Todos...</h1> }
            </div>


    </>
  )
}

export default Todo 