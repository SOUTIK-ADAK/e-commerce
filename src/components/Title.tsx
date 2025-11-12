import React from 'react'

const Title = ({text1, text2}: {text1: string, text2: string}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-gray-500 text-sm sm:text-base md:text-lg'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
      <p className='w-8 sm:w-12 h-px sm:h-0.5 bg-gray-700 flex-1 max-w-16'></p>
    </div>
  )
}

export default Title
