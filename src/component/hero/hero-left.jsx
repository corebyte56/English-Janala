import React from 'react'
import HeroLeftText from './hero-left-text'
import HeroLeftInput from './hero-left-input'

const HeroLeft = () => {
  return (
    <div className='mx-5 md:mx-0'>
        <HeroLeftText />
        <HeroLeftInput />
    </div>
  )
}

export default HeroLeft
