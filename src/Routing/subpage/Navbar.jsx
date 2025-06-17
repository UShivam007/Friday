import React from 'react'
import './Nav.css';
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
        <div className='cube'>
            <div className="left">
             <p className=" text-3xl font-extrabold text-gray-700">Minute</p>
             <span><img src="logo.png" alt="" style={{height:"60px"}} /></span>
            </div>
            <div className ="right">  
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About us</NavLink>
                <NavLink to="/courses/:coursedetails">Courses</NavLink>
                <NavLink to="/contact">Contact</NavLink> 
                <NavLink to="/dashboard">DashBoard</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register" className={"font-medium text-sm text-gray-900"}>Register</NavLink>
            </div>
        </div>
  )
}

export default Navbar;