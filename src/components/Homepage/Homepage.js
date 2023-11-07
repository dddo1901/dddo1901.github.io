import React from 'react';
import NewArrivals from '../NewArrivals/NewArrivals';
import TopSelling from '../TopSelling/TopSelling';
import Slideshow from '../Slideshow/Slideshow';
import { motion } from 'framer-motion';

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
    <motion.div
    className="homepage"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
      <Slideshow/>
      <NewArrivals/>
      <TopSelling/>
    /</motion.div>
  )
}

export default Homepage