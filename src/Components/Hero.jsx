import React from 'react'
import './Hero.css'
import arrow from '../Assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='bg-black bg-opacity-60 h-[100vh] w-[100%] flex flex-col items-center justify-center gap-6'>
          <div>
            <p className='text-white font-bold text-[60px] leading-tight'>We Ensure Better Education <br />for a Better World</p>
          </div>
          <div>
            <p className='text-white font-normal text-[20px] leading-tight'>Education shapes minds, fosters critical thinking, and unlocks opportunities <br />for personal and societal development.</p>
          </div>
          <button className='bg-white border-white text-gray-900 text-[17px] px-6 py-3 flex gap-4 items-center rounded-3xl hover:text-white hover:bg-black hover:font-semibold'>Explore more <img src={arrow} className='w-[20px] h-[12px]' alt="" /></button>
      </div>             
    </div>
  )
}

export default Hero
