import { useState, useEffect } from 'react';
import './GeneralSlider.css'
import dataOne from "../dataOne";
import { FaPlayCircle,FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";

const GeneralSlider = ({darkMode}) => {



  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % dataOne.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const {title,img,leftText,rightText,trailer,ratio} = dataOne[currentImageIndex];

  const handlePrev = () => {
    setCurrentImageIndex((currentImageIndex - 1 + dataOne.length) % dataOne.length);
  }

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % dataOne.length);
  }



  return (
    <div className='container-slider'>
      <h1 className='logo-general-slider'
       style={{color: darkMode ? '' : '#292524',
              backgroundColor: darkMode ? '' : '#658864'
            }}
      >WHAT WILL WATCH TODAY</h1>
      <div className='wrap-slider'>
        <div className='one-slide'>
          <h2>{title}</h2>
          <img src={img} alt="" />

          <button 
          className='prev-btn' 
          onClick={handlePrev}
          style={{color: darkMode ? '' : '#658864'}}
          >
          <FaArrowAltCircleLeft/></button>
          <button 
          className='play'
          ><a href={trailer}
          style={{color: darkMode ? '' : '#658864'}}
          ><FaPlayCircle/></a></button>
          <button className='next-btn' 
          onClick={handleNext}
          style={{color: darkMode ? '' : '#658864'}}
          ><FaArrowAltCircleRight/></button>
        
          <div className='left-text'>{leftText}</div>
          <div className='ration'>{ratio}</div>
          <div className='right-text'><a href={rightText}>IMDB</a></div>
        </div>
      </div>

    </div>
  )
}
export default GeneralSlider