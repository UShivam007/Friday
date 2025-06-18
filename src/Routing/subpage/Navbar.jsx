import React from 'react'
import './Nav.css';
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
        <div className='cube'>
            <div className="left">
             <p className=" text-3xl text-gray-700 .rubik">Minute</p>
             <span><img src="logo.png" alt="" style={{height:"60px"}} /></span>
            </div>
            <div className ="right">  
                <NavLink to="/home" className={".alumni-sans-sc"}>Home</NavLink>
                <NavLink to="/about" className={".alumni-sans-sc"}>About us</NavLink>
                <NavLink to="/courses/:coursedetails" className={".alumni-sans-sc"}>Courses</NavLink>
                <NavLink to="/contact" className={".alumni-sans-sc"}>Contact</NavLink> 
                <NavLink to="/dashboard" className={".alumni-sans-sc"}>DashBoard</NavLink>
                <NavLink to="/login" className={".alumni-sans-sc"}>Login</NavLink>
                <NavLink to="/register" className={"font-medium text-sm text-gray-900 .alumni-sans-sc"}>Register</NavLink>
            </div>
        </div>
  )
}

export default Navbar;