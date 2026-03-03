import React from 'react'
import HeroLeft from './hero-left'
import HeroRight from './hero-right'

const Hero = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 items-center py-20 container mx-auto'>
        <HeroLeft />    
        <HeroRight />
    </div>
  )
}

export default Hero
