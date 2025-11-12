import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <>
      <div className='flex flex-col sm:flex-row border border-gray-400 min-h-[60vh] sm:min-h-[70vh]' >
        {/*Hero Left Side*/}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-4 sm:px-8' >
          <div className='text-[#414141] text-center sm:text-left' >
            <div className='flex items-center gap-2 justify-center sm:justify-start' >
              <p className='w-8 md:w-11 h-[0.5px] bg-[#414141]' ></p>
              <p className='font-medium text-sm md:text-base' >OUR BESTSELLERS</p>
            </div>
            <h1 className='prata-regular text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-relaxed mt-4' >Latest Arrivals</h1>
            <div className='flex items-center gap-2 justify-center sm:justify-start mt-4'>
              <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
              <p className='w-8 md:w-11 h-[0.5px] bg-[#414141]'></p>
            </div>
          </div>
        </div>
        {/* Hero Right Side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center p-4 sm:p-8'>
          <img className='w-full max-w-md sm:max-w-none h-auto object-cover rounded-lg' src={assets.hero_img} alt="Latest fashion arrivals" />
        </div>
      </div>
    </>
  )
}

export default Hero
