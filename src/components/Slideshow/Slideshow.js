import "./Slideshow.scss";
import slide1 from "./imageSlideShow/BANNER1.jpg";
import slide2 from "./imageSlideShow/BANNER2.jpg";
import slide3 from "./imageSlideShow/BANNER3.jpg";
import Carousel from "react-bootstrap/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Slideshow() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="slideshow" data-aos="fade-up">
      <Carousel>
        <Carousel.Item>
          <img className="slideshow-img" src={slide1} alt="slide1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="slideshow-img" src={slide2} alt="slide2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="slideshow-img" src={slide3} alt="slide3" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slideshow;
