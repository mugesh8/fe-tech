import React from 'react'
import Card from '../components/Card'
import NavBar from '../components/NavBar'
import NavbarSearch from '../components/NavbarSearch'
import SearchBarLocation from '../components/SearchBarLocation'
import Propic from '../assets/profile-pic.png'
import '../pages/MainPage.css'


const MainPage = () => {
  return (
    <>
    <div className='Mob-nav'>
        <div><i class="bi bi-list"></i></div>
        <div>Mobile Site Product</div>
        <div><img src= {Propic} alt="" /></div>
      </div>
     <NavBar />
     <NavbarSearch/>
     <SearchBarLocation/>
     <Card/>
    </>
  )
}

export default MainPage