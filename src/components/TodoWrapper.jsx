import React from 'react'
import TodoItem from './TodoItem'
import {useEffect, useState} from "react";
import axios from "axios";
import './css/todo-wrapper.css'



function TodoWrapper() {

  const [data,setData]=useState([])


  useEffect(()=>{
    (async ()=>{
        const res=await axios.get("https://crud.teamrabbil.com/api/v1/ReadProduct")
        setData(res.data['data']);
    })()
},[])

console.log(data)


  return (
    <div className='todo-wrapper'>
       
       {
        data.map((item,index)=>{
           return(
            <TodoItem data={item} />
             )
        })
       }
    </div>
  )
}

export default TodoWrapper



//Next day data passing and 
//anisul islam video 9 .....7.30 dec