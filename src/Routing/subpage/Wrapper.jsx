import React, { useState } from 'react'

const Wrapper = () => {
    let [status,setstatus] = useState();
  return (
    <div>
        
        {/* {Element is shown when status is True} */}
        {/* {Using ternary operator} */}
        {/* {(status)?"Element shown in screen when Status is True ":" "} */}
        {/* ternary operator is used when you have two statements */}
        {/* Wrapper element ,it is used if you have one Statement*/}
        {status && "Element shown in screen when Status is True"}
        <button onClick={()=>{setstatus(!status)}} className ='border-1 bg-blue-700 p-2 mt-1 rounded-2xl text-white'>Update</button>
    </div>
  )
}

export default Wrapper;