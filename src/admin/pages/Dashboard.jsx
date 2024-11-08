import React from 'react';
import { BrowserRouter as Router, Routes, Route , useLocation} from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import AdminSidebar from '../components/AdminSidebar';
import ProductViewDetails from '../components/products/ProductViewDetails';
import '../pages/Dashboard.css'
import ProductList from '../components/products/ProductList';
import Forum from '../components/products/Forum';
import Technicians from '../components/products/Technicians';
import ProductView from '../components/products/ProductView';
export default function Dashboard(){
    const location = useLocation();
    const renderContent = () => {
        switch(location.pathname) {
            case '/Dashboard/products':
                return (
                    <div>
                        <ProductList/>
                    </div>
                )
                case'/Dashboard/productView':
                return(
                    <div>
                        <ProductView/>
                    </div>
                )
                case'/Dashboard/productViewDetails':
                return(
                    <div>
                        <ProductViewDetails/>
                    </div>
                )
            case '/Dashboard/forum':
                return(
                    <div>
                        <Forum/>
                    </div>
                )
                case '/Dashboard/technicians':
                return(
                    <div>
                        <Technicians/>
                    </div>
                )
            default:
                return null;
        }
    }
    
return(

    <div className="container-fulid d-flex flex- p-0">
        <div className="" style={{width:'20%'}}>
        <AdminSidebar/>
        </div>
      <div className="sideNav d-flex flex-column" >
      <AdminNavbar/>
        <main className="content-area flex-grow-1 p-4" style={{backgroundColor:'#FAFAFA', height:'90vh'}}>
        {renderContent()}
        </main>
      </div>
    </div>
)
}