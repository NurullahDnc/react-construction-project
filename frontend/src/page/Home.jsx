import React from 'react'
import Banner from '../components/home/Banner'
import HomeServices from '../components/home/HomeServices'
import Services from '../components/general/ServicesProduct'
import ContactUs from '../components/home/ContactUs'
import Text from '../components/home/HomeCareer'
import Brand from '../components/home/Brand'
import ProjectSlider from '../components/home/ProjectSlider'
import Cart from '../components/home/Cart'

export default function Home() {
  return (
    <div>
        <Banner />
        <HomeServices />
        <ContactUs />
        <Text />
        <ProjectSlider />
        <Cart />
        <Brand />

    </div>
  )
}
  