import Router from 'express/lib/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import {  Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './pages/home'
import TravelTracker from './pages/travelTracker'
import ContactUs from './pages/contactUs'
import Logout from './pages/logout'
import VideoBG from './components/VideoBG';


function App() {
  return (
    <>
    <VideoBG/>
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/tracker' element={<TravelTracker/>}></Route>        
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
      </Routes>
    </>
  )
}

export default App
