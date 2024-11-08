// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './user/components/NavBar';
import MainPage from './user/pages/MainPage';
import Cart from './user/pages/Cart';
import Card from './user/components/Card';
import NavbarSearch from './user/components/NavbarSearch';
import SearchBarLocation from './user/components/SearchBarLocation';
import React, { useState } from 'react';
import Dashboard from './admin/pages/Dashboard';
import Login from './Auth/Login';
import Signup from './Auth/Signup';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Auth/Login' element={<Login/>} />
        <Route path='/Auth/Signup' element={<Signup/>} />
        <Route path="/" element={<MainPage />} />
        <Route path="/user/components/SearchBarLocation" element={<SearchBarLocation />} />
        <Route path="/user/components/Card" element={<Card setCartItems={setCartItems} />} />
        <Route path="/user/pages/Cart" element={<Cart cartItems={cartItems} />} />
        <Route path='/Dashboard/*' element={<Dashboard/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;