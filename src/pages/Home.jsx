import React from 'react'
import Navigation from '../components/Navigation'
import TodoWrapper from '../components/TodoWrapper'
import CreateForm from '../components/CreateForm';
import {BrowserRouter, Route, Routes,useLocation} from 'react-router-dom';
import './css/home.css'

function HomePage() {
  return (
   <div className='home-wrapper'>
        <BrowserRouter>
          <div className="navigation">
             <Navigation />
          </div>

           <div className="todo">
             <Routes>
               <Route element={<TodoWrapper />} path='/' />
               <Route element={<CreateForm />} path='/create' />     
             </Routes>
             </div>
        </BrowserRouter> 
   </div>
  )
}

export default HomePage
