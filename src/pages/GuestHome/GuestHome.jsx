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
import six from '../../images/six.png'
import seven from '../../images/seven.png'
import eight from '../../images/eight.png'
import nine from '../../images/nine.png'
import ten from '../../images/ten.png'
import eleven from '../../images/eleven.png'
import twelve from '../../images/twelve.png'
import thirteen from '../../images/thirteen.png'
import fourteen from '../../images/fourteen.png'
import fifteen from '../../images/fifteen.png'

const GuestMainHome = () => {


  const Services = [
    {
        subject: 'expert mixing and mastering engineer',
        image: six
    },
    {
        subject: 'engaging article or blog post',
        image: seven
    },
    {
        subject: 'SEO and ranking your Sites/Channel',
        image: eight
    },
    {
        subject: 'create original business poster for digital marketing',
        image: nine
    },
    {
        subject: 'trumpet section to ensure your song is a hit',
        image: ten
    },
    {
        subject: 'Programming in python',
        image: eleven
    },
    {
        subject: 'Proofread and Editing website',
        image: twelve
    },
    {
        subject: 'Pro Logo Designing',
        image: thirteen
    },
    {
        subject: 'Microcontroller Programming ',
        image: fourteen
    },
    {
        subject: 'WordPress Bug Fixer and Developer',
        image: fifteen
    },

]

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
      <SuggestedServices 
      title={'Services You may also like'}
      viewAllbtn={"View All"}
      data={Services}
      />
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