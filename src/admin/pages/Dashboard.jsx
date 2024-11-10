import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import AdminSidebar from '../components/AdminSidebar';
import ProductList from '../components/products/ProductList';
import ProductView from '../components/products/ProductView';
import ProductViewDetails from '../components/products/ProductViewDetails';
import Forum from '../components/products/Forum';
import Technicians from '../components/products/Technicians';
import '../pages/Dashboard.css';

export default function Dashboard() {
    const navigate = useNavigate();
    const LoggedUser = JSON.parse(localStorage.getItem('userData'));

    useEffect(() => {
        if (!LoggedUser || LoggedUser.isAdmin !== 1) {
            navigate('/Auth/login'); // Redirect if not logged in or not an admin
        }
    }, [LoggedUser, navigate]);

    if (!LoggedUser || LoggedUser.isAdmin !== 1) {
        return null; // Prevent rendering if navigating away
    }

    return (
        <div className="container-fluid d-flex p-0">
            <div style={{ width: '20%' }}>
                <AdminSidebar />
            </div>
            <div className="sideNav d-flex flex-column">
                <AdminNavbar />
                <main className="content-area flex-grow-1 p-4" style={{ backgroundColor: '#FAFAFA', height: '90vh' }}>
                    <Routes>
                        <Route path="products" element={<ProductList />} />
                        <Route path="productView" element={<ProductView />} />
                        <Route path="productViewDetails/:id" element={<ProductViewDetails />} />
                        <Route path="forum" element={<Forum />} />
                        <Route path="technicians" element={<Technicians />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}
