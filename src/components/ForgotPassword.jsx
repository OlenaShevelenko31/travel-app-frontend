import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Axios from "axios";





function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("https://travel-app-backend-uco2.onrender.com/forgotPassword", {
      email,
    }).then(response => {
        if(response.data.status) {
          alert("check you email for reset password link")
            navigate('/login')
        }
    }).catch(err => {
        console.log(err)
    })
  };

  
  return (
    <div className='register' style={{padding: '10px'}} >
      <div className='register_form'>

      <form onSubmit={handleSubmit} >
        
      <h1 className="text-center ">Forgot Password? </h1>
     
        <input
        style={{margin: 30, width: '250px'}}
          type='email'
          className="form-control    mb-3"
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email'
          value={email}
        />
       
        <button 
          style={{margin: 30, width: '250px'}}
          className="form_btn" type="submit"> Send
        </button>
      </form>
      <br />
      </div>
    </div>
  )
}

export default ForgotPassword