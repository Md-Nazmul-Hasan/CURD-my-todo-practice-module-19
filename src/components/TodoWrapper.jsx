import React from 'react'
import {useEffect, useState} from "react";
import axios from "axios";
import './css/todo-wrapper.css'
import { NavLink } from 'react-router-dom';
import './css/todo-item.css'
import Swal from "sweetalert2"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import short cut.........CTRL+SPACE......

function TodoWrapper() {
  
  const [id, setId]=useState(0)
  const [data,setData]=useState([])
 

  useEffect(()=>{
    (async ()=>{
        const res=await axios.get("https://crud.teamrabbil.com/api/v1/ReadProduct")
        setData(res.data['data']);
    })()
},[id])

//Delete Data
const onDelete = async (id) => {
  let URL="https://crud.teamrabbil.com/api/v1/DeleteProduct/"+id;
  await axios.get(URL)
  setId(id)
  toast.error('Deleted Successfully!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  navigate('/')
 
}

//addToCart show message

// function addToCart(){
//   Swal.fire("Cart added Succesfully");
 
// }

//Toast message
const notify = () => toast.success('Cart added Successfully!', {
       position: "top-right",
       autoClose: 3000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "dark",
  });;


  return (
    <div className='todo-wrapper'>
       
       {
        data.map((item,index)=>{
          const {Img,ProductName,ProductCode,Qty,TotalPrice,UnitPrice,_id} = item;
           return(
            // slide up
        <div className='todo-item-wrapper' data-aos="zoom-in" key={index}>  
            <div className="card border-0">
    
             <div className="card-header-img">
               <img src={Img} alt="#"/>
             </div>
                  <div className="card-body">
                    <h4>{ProductName}</h4>               
                    <span>Product code : {ProductCode}</span> <br />
                    <span>Unit price: {UnitPrice}</span> <br />
                    <span>Qty : {Qty}</span>
                    <p>Total price: <span className='text-danger fs-5'><b> {TotalPrice} </b></span> USD</p>
                    <span>⭐⭐⭐⭐⭐</span> <br />                              
                    <NavLink className='btn btn-success mt-2' to={"/update/"+_id}>Edit</NavLink>                  
                    <button onClick={async ()=>{await onDelete(_id)}} className='btn btn-danger mx-2 mt-2'>Delete</button>
                    <br />
                    
                    <button onClick={notify} className='w-100 btn btn-outline-dark mt-3'><b>Add to cart</b></button>
                   
                </div>
            </div>
           
        </div>
    
             )
        })
       }

       <ToastContainer />
    </div>
  )
}

export default TodoWrapper



//Next day data passing and 
//anisul islam video 9 .....7.30 dec