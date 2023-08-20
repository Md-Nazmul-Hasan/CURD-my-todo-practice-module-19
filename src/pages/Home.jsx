import React from 'react'
import Navigation from '../components/Navigation'
import TodoMainWrapper from '../components/TodoMainWrapper'
import CreateForm from '../components/CreateForm';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './css/home.css'


function HomePage() {
  return (
   <div className='home-wrapper'>
        <BrowserRouter>
          <div className="navigation d-none d-sm-block">
             <Navigation />
          </div>

           <div className="todo">
             <Routes>
               <Route element={<TodoMainWrapper />} path='/' />
               <Route element={<CreateForm />} path='/create' /> 
               <Route element={<CreateForm />} path='/update/:id' />     
             </Routes>
             </div>
        </BrowserRouter> 
   </div>
  )
}
export default HomePage
