import React from 'react'
import Card from '../components/Card'
import NavBar from '../components/NavBar'
import NavbarSearch from '../components/NavbarSearch'
import SearchBarLocation from '../components/SearchBarLocation'


const MainPage = () => {
  return (
    <>
     <NavBar />
     <NavbarSearch/>
     <SearchBarLocation/>
     <Card/>
    </>
  )
}

export default MainPage