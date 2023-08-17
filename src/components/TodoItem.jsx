import React from 'react'
import './css/todo-item.css'

function TodoItem(props) {

const {Img,ProductName,ProductCode,Qty,TotalPrice,UnitPrice} = props.data;


return (

   <div className='todo-item-wrapper'>     
        <div className="card border-0">

         <div className="card-header-img">
           <img src={Img} alt="#"/>
         </div>
              <div className="card-body">
                <h3>ProductName : {ProductName}</h3>
               
                
                <h4>Product Code : {ProductCode}</h4>
                <h4>Unit Price: {UnitPrice}</h4>
                <h4>Qty :{Qty}</h4>
                <h4>Total Price: {TotalPrice} BDT</h4>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <button className='btn btn-success'>Edit</button>
               <button className='btn btn-danger mx-2'>Delete</button>
               
            </div>
        </div>
 
    </div>
  )
}

export default TodoItem;