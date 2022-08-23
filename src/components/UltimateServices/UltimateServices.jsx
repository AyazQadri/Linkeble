import React from 'react'
import '../UltimateServices/UltimateServices.css';
import Ultimateimage from '../../images/ultimate.png';

const UltimateServices = () => {
  return (
    <div className='main_ultimate_services'>
        <div className='ultimateTextMain'>
            <div className='ultimate_text'>
            The Ultimate services that <br/> fits your brand personality.
            </div>
            <div className='button_div'>
                 Get Started              
            </div>
        </div>
        <div className='image_ultimate_design'>
            <img src={Ultimateimage} alt="ultimate Services image" className='ultimate_image_css' />
        </div>
 
    </div>
  )
}

export default UltimateServices