import React, { useState } from 'react';
import axios from 'axios';
import '../Auth/Login.css';
import logo from '../user/assets/RiM-Logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/rim/loginUser', { username, password });
      
      if (response.data.userData.isLogin) {
        localStorage.setItem('userData', JSON.stringify(response.data.userData));
        if(response.data.userData.isAdmin === 1){
          navigate('/Dashboard');
        }
        else{
          navigate('/');
        }
        console.log('Login successful');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Login failed');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h3>Welcome Back</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        <p className="otp-login">
          <a href="/Auth/Signup">Sign-up</a>
        </p>
      </div>
      <div className="login-banner">
        <img src={logo} alt="Logo" className="rim-logo" />
      </div>
    </div>
  );
};

export default Login;
