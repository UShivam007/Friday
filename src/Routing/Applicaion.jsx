import React from 'react'
import Navbar from './subpage/Navbar'
import { Outlet, useLocation } from 'react-router'
import Footer from './subpage/Footer'

const Application = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Outlet />
      {location.pathname !== "/ " && <Footer />}
    </div>
  )
}

export default Application;