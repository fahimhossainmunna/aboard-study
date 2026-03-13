import React from 'react'
import Hero from '../sections/Hero'
import UniversityGrid from '../sections/UniversityGrid'
import Stats from '../sections/Stats'
import SuccessStories from '../sections/SuccessStories'
import WhyChooseUs from '../sections/WhyChooseUs'
import Destinations from '../sections/Destinations'
import Recognitions from '../sections/Recognitions'
import RegistrationForm from '../sections/RegistrationForm'
import Footer from '../common/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <UniversityGrid/>
        <Stats/>
        <SuccessStories/>
        <WhyChooseUs/>
        <Destinations/>
        <Recognitions/>
        <RegistrationForm/>
        <Footer/>
    </div>
  )
}

export default Home