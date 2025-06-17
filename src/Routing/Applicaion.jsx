import React from 'react'
import Navbar from './subpage/Navbar'
import { Outlet } from 'react-router'

const Applicaion = () => {
  return (
    <div>
      <Navbar/>
      <div className='bg-[#e36969]'>
      <Outlet/>
      </div>
        
        
    </div>
  )
}

export default Applicaion;