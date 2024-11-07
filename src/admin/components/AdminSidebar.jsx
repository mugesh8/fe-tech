import React from 'react'
import '../components/AdminSidebar.css'
import Logo from '../assets/RiM-Logo.png'
import Enterprise from '../assets/AdminDashboardIcons/Enterprise ai.png'
import Forum from '../assets/AdminDashboardIcons/forum.png'
import Order from '../assets/AdminDashboardIcons/Order summary.png'
import Product from '../assets/AdminDashboardIcons/Product.png'
import Shipment from '../assets/AdminDashboardIcons/Shipment.png'
import Technician from '../assets/AdminDashboardIcons/Technicians.png'
import Distributor from '../assets/AdminDashboardIcons/Distributors.png'
import Transport from '../assets/AdminDashboardIcons/Transport.png'


const AdminSidebar = () => {
  return (
    <>
     <div className='sideNavContainer'>
      <div className="Dashboardlogo">
        <img src={Logo} alt="logo"/>
      </div>
     </div>
     <div className='sideNavLinks'>
        <div className='general'>
           <small>General</small>
        </div>
        <div className='generalLinks'>
            <ul>
                <li><a href=""><img src={Enterprise} alt="" style={{color: 'black'}}/> Enterprise AI Hub</a></li>
                <li><a href='/Dashboard/forum'><img src={Forum} alt="" /> Forum</a></li>
                <li><a href="/Dashboard/products"><img src={Product} alt="" /> Products</a></li>
                <li><a href=""><img src={Technician} alt="" /> Technicians</a></li>
                <li><a href=""><img src={Distributor} alt="" /> Distributors</a></li>
                <li><a href=""><img src={Shipment} alt="" /> Shipments</a></li>
                <li><a href=""><img src={Transport} alt="" /> Transport</a></li>
                <li><a href=""><img src={Order} alt="" /> Order Summary</a></li>
            </ul>
        </div>

     </div>
    </>
  )
}

export default AdminSidebar