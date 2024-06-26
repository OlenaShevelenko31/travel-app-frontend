import React, { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Axios from "axios";




function ResetPassword() {
  const [password, setPassword] = useState('');
  const {token} = useParams()

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`https://travel-app-backend-uco2.onrender.com/resetPassword/${token}`, {
        password,
    }).then(response => {
        if(response.data.status) {
            navigate('/login')
        }
        console.log(response.data);
    }).catch(err => {
        console.log(err)
    })
  };

  
  return (
    <div className='register' style={{padding: '10px'}}>
        <div className='register_form'>

      <form onSubmit={handleSubmit} >
        
      <h1 className="text-center ">New Password: </h1>
     

         <input
            style={{margin: 30, width: '250px'}}
          type='password'
          className="form-control    mb-3"
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
          value={password}
        />
       
        <button 
            style={{ margin: 30,width: '250px'}}
            className="form_btn" type="submit" >Reset</button>
      </form>
    </div>
    </div>
  )
}

export default ResetPassword