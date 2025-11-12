import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-8 sm:gap-12 text-center py-20 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm md:text-base text-gray-700'>
      <div className='flex flex-col items-center'>
        <img src={assets.exchange_icon} className='w-12 sm:w-16 m-auto mb-5' alt="Exchange icon" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400 mt-2'>We offer hassle free exchange policy</p>
     </div>
     <div className='flex flex-col items-center'>
        <img src={assets.quality_icon} className='w-12 sm:w-16 m-auto mb-5' alt="Quality icon" />
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-400 mt-2'>7 Days Free Return Policy</p>
     </div>
     <div className='flex flex-col items-center'>
        <img src={assets.support_img} className='w-12 sm:w-16 m-auto mb-5' alt="Support icon" />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400 mt-2'>We Provide 24/7 Customer Support</p>
     </div>
    </div>
  )
}

export default OurPolicy
