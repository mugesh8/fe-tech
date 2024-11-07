import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import userLogo from '../assets/user-logo.png'
import notify from '../assets/notify.png'
import '../components/AdminNavbar.css';

const AdminNavbar = () => {
  return (
    <div style={{width:'100%'}}>
    <Navbar expand="lg" className="m-0" style={{border:'none', backgroundColor:'white'}}> 
    <Navbar.Brand as={Link} to="/" style={{fontSize:'30px', fontWeight:'500', color:'#111111'}}>Products</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <input placeholder='Search Anything...' type="search" name="search" id="search"/>
        <Nav.Link as={Link} to="/cart"><img src={notify} alt="notify" srcset="" style={{marginTop: '7px'}} /></Nav.Link>
        <Nav.Link as={Link} to ="/logout"><img style={{width:'48px', height:'48px', borderRadius: '5px'}} src={userLogo} alt="logout" /></Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default AdminNavbar


