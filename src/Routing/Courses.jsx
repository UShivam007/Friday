import React from 'react'
import { Outlet, useParams } from 'react-router';

const Course = () => {

  const {coursedetails} = useParams();

  return (
    <div>
        Courses 
        <h1>Couse details {coursedetails}</h1>
        <Outlet />
    </div>
  )
}

export default Course;
