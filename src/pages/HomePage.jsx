import React from 'react'
import Header from '../components/Layout/Header'
import AboutUs from '../components/Layout/AboutUs'
import WhyChooseUs from '../components/Layout/WhyChooseUs'
import SuccessStories from '../components/Layout/SuccessStories'
import RecentProjects from '../components/Layout/projects'
import CTA from '../components/Layout/CTA'
import Footer from '../components/Layout/Footer'

const HomePage = () => {
  return (
    <div>
        <Header />
        <AboutUs />
        <WhyChooseUs />
        <SuccessStories />
        <RecentProjects />
        <CTA />
        <Footer />
    </div>
  )
}

export default HomePage