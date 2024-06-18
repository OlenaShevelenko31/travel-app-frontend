import React from 'react'
import CountySelect from '../components/TravelTracker/CountySelect.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import Weather from '../components/Weather/index.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function travelTracker() {
  return (
    <div  style={{display: 'flex', flexDirection: "column", justifyContent: 'center', alignContent: 'center'}}>
      <Navbar />
      <h1 style={{display: 'flex', justifyContent: "center", color: 'white'}}>Check where you have been: </h1>
      <CountySelect/>
      <br />
      <Weather/>
    </div>
  )
}

export default travelTracker