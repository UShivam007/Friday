import React from 'react'
import './Nav.css';
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
        <div className='cube'>
            <div className="left">
             <p className=" text-3xl   text-green-400">Minute</p>
             <span><img src="logo.png" alt="" style={{height:"60px"}} /></span>
            </div>
            <div className ="right">  
                <NavLink to="/Home">Home</NavLink>
                <NavLink to="/About">About us</NavLink>
                <NavLink to="/Courses/:coursedetails">Courses</NavLink>
                <NavLink to="/Contact">Contact</NavLink> 
                <NavLink to="/Dashboard">DashBoard</NavLink>
                <NavLink to="/Login">Login</NavLink>
            </div>
        </div>
  )
}

export default Navbar;