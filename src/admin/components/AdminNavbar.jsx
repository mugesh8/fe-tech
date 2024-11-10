import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import userLogo from '../assets/user-logo.png';
import notify from '../assets/notify.png';
import '../components/AdminNavbar.css';

const AdminNavbar = () => {
    const location = useLocation();
    const [tab, setTab] = useState('');

    useEffect(() => {
        // Update the `tab` based on the current pathname
        switch (location.pathname) {
            case '/Dashboard':
                setTab('Enterprise Ai hub');
                break;
            case '/Dashboard/products':
                setTab('Products');
                break;
            default:
                setTab('Product');
                break;
        }
    }, [location.pathname]); // Only re-run the effect if the pathname changes

    return (
        <div style={{ width: '100%' }}>
            <Navbar expand="lg" className="m-0" style={{ border: 'none', backgroundColor: 'white' }}>
                <Navbar.Brand as={Link} to="/" style={{ fontSize: '30px', fontWeight: '500', color: '#111111' }}>
                    {tab}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <input placeholder="Search Anything..." type="search" name="search" id="search" />
                        <Nav.Link as={Link} to="/cart">
                            <img src={notify} alt="notify" style={{ marginTop: '7px' }} />
                        </Nav.Link>
                        <Nav.Link as={Link} to="/logout">
                            <img src={userLogo} alt="logout" style={{ width: '48px', height: '48px', borderRadius: '5px' }} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default AdminNavbar;
