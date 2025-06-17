import { createContext, useState } from 'react';
import './App.css';
import Card from '../subcontent/Card.jsx'
import Change from '../subcontent/State.jsx'
import MainComponent from './MainComponent.jsx';


export const DataContext = createContext()


function App() {

  // let option = ["Hitech", "Durable", "Money Saving", "Compact"]
  // let option2 = {
  //   a: "Super",
  //   b: "Fantastic",
  //   c: "Hi-tech",
  //   d: "WaterProof"
  // }

  let details={
    name :"Shivam",
    city :"Nainital"
  }

  return (
    <>
     {/* <div className='boss'>
      <Card name="Samsung" price='90000' varient="touchpad" rate='4' features={option[0]} features2={option2.a} />
      <Card name="Vivo" price='40000' varient="Mobile" rate='4.2'    features={option[1]} features2={option2.b} />
      <Card name="Iphone" price='100000' varient="Mobile" rate='5'   features={option[2]} features2={option2.c} />
      <Card name="One+plus" price="50000" varient="Ipad" rate="4.8"  features={option[3]} features2={option2.d} />
      </div>
      <Change /> */}
      
      <DataContext.Provider value ={details}>
        <MainComponent/>
      </DataContext.Provider>

    </>
  )
}

export default App;