import React, { useState } from 'react'
import '../ServicesCard/ServicesCard.css';
import CardServices from './Card';
import LeftIcon from '../../images/lefticon.png';
import RightIcon from '../../images/righticom.png';
import one from '../../images/one.png';
import two from '../../images/two.png';
import three from '../../images/three.png';
import four from '../../images/four.png';
import five from '../../images/five.png';




const ServicesCard = () => {
  
  const Services = [
      {
        subject: 'Develops Mobile Apps for Android and IOS',
        image: one
      },
      {
        subject: 'Mobile Application  UI/UX XD or Figma Design',
        image: two
      }, 
      {
        subject: 'Machine Learning Projects in Python',
        image: three
      }, 
      {
        subject: 'Design & develop Modern Website',
        image: four
      },
      {
        subject: 'Native iOS Development',
        image: five
      }, 
      // {
      //   subject: 'Native iOS Development',
      //   image: five
      // },
      // {
      //   subject: 'Native iOS Development',
      //   image: five
      // }
    ]
  

  const RightSlide = () => {
   
  }

  const LeftSlide = () => {
    
  }

  
  return (
    <div className='main_services_card'>
      <div className='left_icon' onClick={LeftSlide}>
        <img src={LeftIcon} alt="Left Icon" className='icon_inside'  />
      </div>
        <div className='recetly_nviewed_services_main'>
            <text className='recetly_nviewed_services_text'>
            Recently Viewed Services
            </text>
            <div className='view_all_text'>
                View All
            </div>
        </div>
        <div className='services_card'> 
        {
            Services.map((item) => {
            return  <CardServices data= {item} />
          })
        }
        </div>
        <div className='right_icon' onClick={RightSlide}>
          <img src={RightIcon} alt="Right Icon" className='icon_inside' />
      </div>
    </div>
  )
}

export default ServicesCard