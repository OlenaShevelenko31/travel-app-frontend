import Router from 'express/lib/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import {  Routes, Route } from 'react-router-dom'
import Login from './pages/signIn.jsx'
import Register from './pages/register'
import Home from './pages/home'
import TravelTracker from './pages/travelTracker'
import ContactUs from './pages/contactUs'
import Logout from './pages/logout'
import VideoBG from './components/VideoBG';
import ForgotPassword from './components/ForgotPassword.jsx';
import ResetPassword from './components/ResetPassword.jsx';


function App() {
  return (
    <>
    <VideoBG/>
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>

        <Route path='/forgotPassword' element={<ForgotPassword/>}></Route>
        <Route path='/resetPassword/:token' element={<ResetPassword/>}></Route>


        <Route path='/home' element={<Home/>}></Route>
        <Route path='/tracker' element={<TravelTracker/>}></Route>        
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
      </Routes>
    </>
  )
}

export default App;
