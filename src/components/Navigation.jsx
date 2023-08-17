import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'

function Navigation() {
  return (
    <div className='navigation-wrapper px-4'>
        <ul className="list-group list-group-flush">
             <li className="list-group-item fs-4"><NavLink to={"/"}>Home</NavLink></li>
             <li className="list-group-item fs-4"><NavLink to={"/create"}>Create</NavLink></li>
             <li className="list-group-item fs-4">Product Read</li>
             <li className="list-group-item fs-4">Product Create</li>
             <li className="list-group-item fs-4">Product Upgrade</li>
            <li  className="list-group-item fs-4">Product delete</li>
            
          </ul>
    </div>
  )
}

export default Navigation