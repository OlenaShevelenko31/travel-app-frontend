import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx';
import FactsPost from '../components/FactsPost/FactsPost';

export default function home() {
  return (

    <div>
        <Navbar/>
        <h1 style={{color:"white", textAlign: 'center'}}>Fun facts!</h1>
        <h3 style={{color:"white", textAlign: 'center'}}>Did you know ... </h3>
        <FactsPost/> 
    </div>
  )
}
