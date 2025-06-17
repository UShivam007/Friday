import React, { useContext } from 'react'
import { DataContext } from './App'

const Post = () => {
  
  let get = useContext(DataContext);
  console.log(get);
    return (
    <div>  <h6>Single Post of : {get.name} </h6>
    <h6>Live At place : {get.city}</h6>
    </div>
  )
}

export default Post