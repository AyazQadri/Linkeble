import React from 'react'
import GuestHome from '../../components/GuestHome/GuestHome'
import GuestOptions from '../../components/GuestOptions/GuestOptions'
import GuestHeader from '../../components/GuestHeader/GuestHeader'
import ServicesCard from '../../components/ServicesCard/ServicesCard'
import ProfessionalServicesCard from '../../components/ProfessionalServicesCard/ProfessionalServicesCard'
import SuggestedServices from '../../components/SuggestedServices/SuggestedServices'
import Slider from '../../components/Slider/Index'
import UltimateServices from '../../components/UltimateServices/UltimateServices'
import Footer from '../../components/Footer/Footer'


const GuestMainHome = () => {
  return (
    <div>
      <div>
      <GuestHome />
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

export default GuestMainHome