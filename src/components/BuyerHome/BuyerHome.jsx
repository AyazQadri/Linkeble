import React from 'react'
import BuyerNavbar from '../BuyerNavbar/BuyerNavbar';
import GuestOptions from '../GuestOptions/GuestOptions';
import SubmitRequestCard from '../SubmitRequestCard/SubmitRequestCard';
import SubmitCardImage1 from '../../images/submitcardimg1.png';
import SubmitCardImage2 from '../../images/submitcardimg2.png';
import SubmitCardImage3 from '../../images/submitcardimg3.png';
import BuyerTabs from '../BuyerTab/BuyerTabs';
import ServicesCardComponent from '../ServicesCardComponent/ServicesCardComponent';
import CardServices from '../ServicesCard/Card';
import RecomendedServicesCard from '../RecomendedServicesCardComponent/RecomendedServicesCard';
import BuyerFooter from '../BuyerFooter/BuyerFooter';

const BuyerHome = () => {

  const SubmitCardData = [
    {
      text1: 'Hey Alexa Beck! Hire some one?',
      image: SubmitCardImage1,
      btntext: 'Submit Request Now'
    },
    {
      text1: 'Check out jobs you Have Posted',
      image: SubmitCardImage2,
      btntext: 'Check Posted Jobs'
    },
    {
      text1: 'Services You may need to order',
      image: SubmitCardImage3,
      btntext: 'Explore'
    },

  ]
  


  return (
    <div>
        <div>
            <BuyerNavbar />
        </div>
        <div>
            <GuestOptions  />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <SubmitRequestCard  
            text1 = {'Hey Alexa Beck! Hire some one?'}
            imageCardone = {SubmitCardImage1}
            btntextCardone = {'Submit Request Now'}
            text2 = {'Check out jobs you Have Posted'}
            imageCardtwo = {SubmitCardImage2}
            btntextCardtwo = {'Check Posted Jobs'}
            text3 = {'Services You may need to order'}
            imageCardthree = {SubmitCardImage3}
            btntextCardthree = {'Explore'}
            />
        </div>
        <div style={{ marginBottom: '4rem' }}>
          <BuyerTabs />
        </div>
        <div>
          <ServicesCardComponent 
          title={'Continue browsing history'}
          subTitle = {'Recently viewed Services'}
          />
        </div>
        <div>
         <RecomendedServicesCard 
         title={'Recommended for you, from USA'}
         />
        </div>
        <div>
          <RecomendedServicesCard
          title={'Most popular Gigs in UX Design '}
          />
        </div>
        <BuyerFooter  />
    </div>
  )
}

export default BuyerHome