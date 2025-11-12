import React from 'react'

const NewsLetterBox = () => {

  const onSubmitHandler = (event:any)=>{
    event.preventDefault();
  }

  return (
    <div className='text-center px-4 sm:px-6 lg:px-8 py-10'>
      <p className='text-xl sm:text-2xl lg:text-3xl font-medium text-gray-800'>Subscribe now & Get 20% Off</p>
      <p className='text-gray-400 mt-3 text-sm sm:text-base'>Subscribe to our newsletter and get 20% off your first purchase</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 lg:w-1/3 flex items-center gap-3 mx-auto my-6 border border-gray-300 rounded-lg overflow-hidden'>
        <input className='w-full sm:flex-1 outline-none px-4 py-3 text-sm sm:text-base' type="email" placeholder='Enter your email' required />
        <button type='submit' className='bg-black text-white text-xs sm:text-sm px-6 sm:px-10 py-3 hover:bg-gray-800 transition-colors'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
