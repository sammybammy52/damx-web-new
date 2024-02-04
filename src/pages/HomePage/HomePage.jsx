import React from 'react'
import NavBar from '../../components/General/NavBar';
import Hero from '../../components/General/Hero';
import Footer from '../../components/General/Footer';

const HomePage = () => {
  return (
    <div>
    <NavBar/>
    <Hero/>
    {/* <HomeSlider/>
    <HomeContent/> */}
    <Footer/>
    </div>
  )
}

export default HomePage