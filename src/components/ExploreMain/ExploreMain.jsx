import React from 'react'
import '../ExploreMain/ExploreMain.css';
import BuyerNavbar from '../BuyerNavbar/BuyerNavbar';
import GuestOptions from '../GuestOptions/GuestOptions';
import GuestHomeSearch from '../GuestHomeSearch/GuestHomeSearch';
import ServicesCard from '../ServicesCard/ServicesCard';
import ProfessionalServicesCard from '../ProfessionalServicesCard/ProfessionalServicesCard';
import SuggestedServices from '../SuggestedServices/SuggestedServices';
import Slider from '../Slider/Index'
import UltimateServices from '../UltimateServices/UltimateServices';
import Footer from '../Footer/Footer';


const ExploreMain = () => {
  return (
    <div>
        <div>
            <BuyerNavbar />
        </div>
        <div>
            <GuestOptions />
        </div>
        <div>
            <GuestHomeSearch />
        </div>
        <div>
            <ServicesCard />
        </div>
        <div>
            <ProfessionalServicesCard />
        </div>
        <div>
            <SuggestedServices />
        </div>
        <div style={{ marginTop: '4rem', marginLeft: '3rem', marginRight: '3rem' }}>
            <Slider />
        </div>
        <div>
            <UltimateServices />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default ExploreMain