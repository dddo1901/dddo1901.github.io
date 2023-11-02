import React from 'react';
import { useState} from 'react';

import './SliderProducts.scss';
import prev from '../../stories/icons/previous.png'
import next from '../../stories/icons/next.png'

function SliderProducts(props) {
    const slider  = props.imagesPreview;  
    const [slidercurrent, setSlidercurrent] = useState(0);
    const sliderlength = slider.length
    const handleNext = () =>{
        setSlidercurrent(slidercurrent === sliderlength - 1 ? 0 : slidercurrent + 1)
    };
    const handlePrev = () =>{
        setSlidercurrent(slidercurrent === 0 ? sliderlength -1 : slidercurrent -1)
    }
  
  return (
    <div className='slider' >
          <div className="slider-show"  >
            {slider.map((items, index) =>{
              return(
              <img src={items.path} alt='index' className={index === slidercurrent ? "slider-show-img-active" : "slider-show-img-freezer"}  key={index}/>  
              )
            })}
              <div className="slider-show-preview"  >
                <div className="slider-show-preview-left"> 
                  <button className='slider-show-preview-button' onClick={handlePrev} style={{backgroundImage   : {prev}}} >
                    <img src={prev} alt="prev-button" className='slider-show-preview-button-previous'/>
                  </button>
                </div>
                <div className="slider-show-preview-center" >
                 
                </div>
                <div className="slider-show-preview-right"> 
                  <button className='slider-show-preview-button' onClick={handleNext} >
                  <img src={next} alt="prev-button" className='slider-show-preview-button-next' />
                  </button>
                </div>
            </div>
      </div>

      <div className="slider-state">
          {slider.map((items,index) =>{
            return( 
              <div className={index === slidercurrent ? "slider-state-active": "slider-state-select"} onClick={() => setSlidercurrent(index)} key={index}></div>
            )
          })}
      </div>
    </div>
  )
}

export default SliderProducts

