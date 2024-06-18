import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './LoginStyles/LoginStyles.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://travel-app-backend-uco2.onrender.com/login', { email, password });
      const { success, message, userId } = response.data;

      if (success) {
        localStorage.setItem('userId', userId); // storing userId in localStorage
        console.log(userId);
        navigate(`/home`);
      } else {
        alert('Check your login or password!')
        console.log('Login failed:', message); 
      }
    } catch (err) {
      console.log('Login error:', err);
    }
  }

  return (
    <div className='container w-25 bg-warning' >
      <h1 className="text-center ">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          className="form-control    mb-3"
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email'
          value={email}
        />
        <input
          type='password'
          className="form-control mb-3"
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
          value={password}
        />
        <button  className="btn btn-primary text-center" type="submit">Login</button>
      </form>
      <br />
      <Link to="/" className="d-block btn btn-primary text-center">Register</Link>
      <br />
    </div>
  );
}

export default Register;
