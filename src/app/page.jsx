import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import HeroSection from '@/components/HeroSection'
import OurServices from '@/components/OurServices'
import OurWorks from '@/components/OurWorks'
import SecondHeroSection from '@/components/AboutUS'
import WhyChosseUs from '@/components/WhyChosseUs'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroSection />
        <SecondHeroSection />
        <OurServices />
        <OurWorks />
        <WhyChosseUs />
        <Gallery />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default page