import React from 'react'
import {NavLink} from 'react-router-dom'
import './css/Navigation.css'

function Navigation() {
  return (
    <div className='navigation-wrapper px-4'>
             <ul className="list-group list-group-flush">
             <li className="list-group-item fs-4"><NavLink className='text-decoration-none text-danger' to={"/"}>All Product</NavLink></li>
             <li className="list-group-item fs-4"><NavLink className='text-decoration-none text-dark' to={"/create"}>Create</NavLink></li>
             <li className="list-group-item fs-4">Product Read</li>
             <li className="list-group-item fs-4">Product Create</li>
             <li className="list-group-item fs-4">Product Upgrade</li>
            <li  className="list-group-item fs-4">Product delete</li>
            <li className="list-group-item fs-4">Laptop</li>
             <li className="list-group-item fs-4">Gadgets</li>
            <li  className="list-group-item fs-4">Mobiles</li>
            <li className="list-group-item fs-4">Graphics Card</li>
             <li className="list-group-item fs-4">Printer</li>
            <li  className="list-group-item fs-4">Mouse </li>
            <li className="list-group-item fs-4">Keyboard</li>
             <li className="list-group-item fs-4">Dextop</li>
            <li  className="list-group-item fs-4">Camera</li>
            <li className="list-group-item fs-4">Drone </li>
             <li className="list-group-item fs-4">Rgb fan</li>
            <li  className="list-group-item fs-4">Powersupply</li>
            <li className="list-group-item fs-4">Processor</li>
             <li className="list-group-item fs-4">Ram</li>
            <li  className="list-group-item fs-4">Monitor</li>
            
          </ul>
    </div>
  )
}

export default Navigation