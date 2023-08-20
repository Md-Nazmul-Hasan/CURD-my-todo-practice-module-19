import TodoWrapper from "./TodoWrapper";
import Pagination from "./Pagination";
import './css/Todo-main-wrapper.css'
import React from 'react'

function TodoMainWrapper() {
  return (
    <div>
       <div className="todo-item">
         <TodoWrapper />
       </div>

       <div className="pagination-wrapper">
          <Pagination />
       </div>
    </div>
  )
}

export default TodoMainWrapper;