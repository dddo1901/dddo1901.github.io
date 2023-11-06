import React from 'react';
import NewArrivals from '../NewArrivals/NewArrivals';
import TopSelling from '../TopSelling/TopSelling';
import Slideshow from '../Slideshow/Slideshow';
import { useState } from 'react';
import ProductData from "../Data.json"
import InformProduct from '../inform/InformProduct';


function Homepage() {
  const [ comparison, setComparison] = useState('');
  const [ inform, setInForm] = useState([])

  const handleAddComparison = (id) =>{
    if(comparison.length <= 4){
      let newComp = ProductData.filter((item) => item.id===id)
    setComparison((comparison)=> [...comparison, newComp[0]]) 
    } else{
      return alert("You should only choose a maximum of 5 products.")
    }
    setInForm((inform) => [...inform,'Comp'])
    
  }
  console.log();

  return (
    <div>
      <Slideshow />
      <NewArrivals handleAddComp={handleAddComparison}/>
      <TopSelling handleAddComp={handleAddComparison}/>
      <InformProduct inform={inform} setInForm={setInForm}/>
    </div>
  )
}

export default Homepage