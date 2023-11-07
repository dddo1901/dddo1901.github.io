import React from 'react';
import NewArrivals from '../NewArrivals/NewArrivals';
import TopSelling from '../TopSelling/TopSelling';
import Slideshow from '../Slideshow/Slideshow';
import { motion } from 'framer-motion';

function Homepage() {
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