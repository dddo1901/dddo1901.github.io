import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from './imageSlideShow/Ảnh chụp màn hình 2023-10-29 213007.png';
import slide2 from './imageSlideShow/5f9a5f1acac9ed43171e739b_5f96f0fecb87cc5ca0964dfe_GM_MANGO_1.png';
import slide3 from './imageSlideShow/local-brand-ao-thun-1200x1200.jpg';
import './SlideShow.scss';

function Slideshow() {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img className='slide' src={slide1} alt="slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='slide' src={slide2} alt="slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='slide' src={slide3} alt="slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  )
}

export default Slideshow