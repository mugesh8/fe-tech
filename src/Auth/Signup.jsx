import React from 'react'
import '../Auth/Signup.css'
import NavBar from '../user/components/NavBar'
import logo from '../user/assets/RiM-Logo.png'

const Signup = () => {
  return (
    <>
      <NavBar/>
      <div className="login-container">
      <div className="login-form">
        <h3>Welcome</h3>
        <div className="form-group">
          <label>User Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" />
        </div>
        <button className="login-button">Sign in</button>
      </div>
      <div className="login-banner">
        <img src={logo} alt="Logo" className="rim-logo" />
      </div>
    </div>
  
    </>
  )
}

export default Signup