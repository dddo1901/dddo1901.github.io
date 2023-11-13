import React from 'react';
import Slideshow from '../Slideshow/Slideshow';
import { motion } from 'framer-motion';
import Maincontent from '../Maincontent/Maincontent'
function Homepage({Add}) {
  return (
    <motion.div
    className="homepage"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
      <Slideshow/>
      <Maincontent Add={Add} />
    /</motion.div>
  )
}

export default Homepage