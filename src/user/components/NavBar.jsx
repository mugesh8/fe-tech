import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/RiM-Logo.png'
import userLogo from '../assets/user-logo.png'
import '../components/NavBar.css'

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLoginClick = () => {
    toggleDropdown()
    navigate('../../Auth/Login')
  }

  const handleSignupClick = () => {
    toggleDropdown()
    navigate('../../Auth/Signup')
  }

  return (
    <nav>
      <div className='nav-1'>
        <p className='nav-para'> <i className="bi bi-geo-alt-fill" style={{ color: 'red' }}></i> Location</p>
        <img className='logo' src={logo} alt="" />
        <div className='user-dropdown'>
          <img className='userLogo' src={userLogo} alt="" onClick={toggleDropdown} />
          {isDropdownOpen && (
            <div className='dropdown-menu'>
              <a href="/Auth/Login" onClick={handleLoginClick}>Login</a>
              <a href="/Auth/Signup" onClick={handleSignupClick}>Signup</a>
              <a href="#">Logout</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar