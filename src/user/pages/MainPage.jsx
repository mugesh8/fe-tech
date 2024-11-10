import React, { useEffect } from 'react';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import NavbarSearch from '../components/NavbarSearch';
import SearchBarLocation from '../components/SearchBarLocation';
import Propic from '../assets/profile-pic.png';
import '../pages/MainPage.css';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const LoggedUser = JSON.parse(localStorage.getItem('userData'));

  useEffect(() => {
    if (!LoggedUser) {
      navigate('/Auth/login');
    } else if (LoggedUser.isAdmin === 1) {
      navigate('/Dashboard');
    }
  }, [LoggedUser, navigate]);

  if (!LoggedUser || LoggedUser.isAdmin === 1) {
    return null; // Avoid rendering the component if navigating away
  }

  return (
    <>
      <div className='Mob-nav'>
        <div><i className="bi bi-list"></i></div>
        <div>Mobile Site Product</div>
        <div><img src={Propic} alt="Profile" /></div>
      </div>
      <NavBar />
      <NavbarSearch />
      <SearchBarLocation />
      <Card />
    </>
  );
};

export default MainPage;
