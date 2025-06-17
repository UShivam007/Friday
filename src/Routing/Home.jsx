import React from "react";
import { useNavigate } from "react-router";



const Home = () => {

  const nav = useNavigate();
  function handelclick(){
    nav("/About")
  }
  return(
    <div> HomE
        <br />
      <button onClick={handelclick}> Move To About Us</button>
    </div>
  )
}

export default Home;