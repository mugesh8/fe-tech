import React from 'react'
import  logo from '../assets/RiM-Logo.png'
import userLogo from '../assets/user-logo.png'
import '../components/NavBar.css';

const NavBar = () => {
  return (
    <nav>
       <div className='nav-1'>
              <p className='nav-para'> <i class="bi bi-geo-alt-fill" style={{color: 'red'}}></i> Location</p>
              <img className='logo' src={logo} alt="" />
              <img className='userLogo' src={userLogo} alt="" />
           </div>
    </nav>
  )
}

export default NavBar