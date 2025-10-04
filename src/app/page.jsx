import HeroSection from '@/components/HeroSection'
import OurServices from '@/components/OurServices'
import OurWorks from '@/components/OurWorks'
import SecondHeroSection from '@/components/SecondHeroSection'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroSection />
        <SecondHeroSection />
        <OurServices />
        <OurWorks />
    </div>
  )
}

export default page