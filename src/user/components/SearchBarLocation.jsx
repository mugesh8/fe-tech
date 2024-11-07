import React, { Fragment } from 'react'
import '../components/SearchBarLocation.css'

const SearchBarLocation = () => {
  return (
    <>
     <div className='nav-links'>
              <button> <i class="bi bi-box-seam"></i>  Forum</button>
                <div className='nav-container'>
                  <ul>
                    <li> <input className='loc-search' type="text" placeholder='Enter your Location here' /></li>
                    <li><a href=""> <i class="bi bi-crosshair" style={{width: '24px', height: '24px'}}></i> Near Me</a></li>
                    <li><a href="">Coimbatore</a></li>
                    <li><a href="">Chennai</a></li>
                    <li><a href="">Kerala</a></li>
                    <li><a href="">Goa</a></li>
                    <li><a href="">Bangalore</a></li>
                    <li><a href="">Pune</a></li>
                  </ul>
                </div>
           </div>
    </>
  )
}

export default SearchBarLocation