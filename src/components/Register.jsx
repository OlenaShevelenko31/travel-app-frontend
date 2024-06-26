import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; 

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('https://travel-app-backend-uco2.onrender.com/', {name, email, password });
      console.log(result);
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className=' register'>
      <div className='register_form'>
      <h1 className="text-center ">Register</h1>
      <form onSubmit={handleSubmit}>
        
      <input
          type='text'
          className="form-control    mb-3"
          onChange={(e) => setName(e.target.value)}
          placeholder='name'
          value={name}
        />
        <input
          type='email'
          className="form-control    mb-3"
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email'
          value={email}
        />
        <input
          type='password'
          className="form-control    mb-3"
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
          value={password}
        />
        <button className="form_btn" type="submit" >Register</button>
      <br />      
      <Link className="form_btn" to="/login">Login Page</Link>
      </form>
      <br />
    </div>
  </div>
  );
}

export default Register;
