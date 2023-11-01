import React from 'react';
import NewArrivals from '../NewArrivals/NewArrivals';
import TopSelling from '../TopSelling/TopSelling';
import Slideshow from '../Slideshow/Slideshow';


function Homepage() {
  return (
    <div>
      <Slideshow/>
      <NewArrivals/>
      <TopSelling/>
    </div>
  )
}

export default Homepage