import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-8 py-8'>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] rounded-lg shadow-lg' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 dark:text-gray-300'>
          <p className='text-lg leading-relaxed'>E-commerce was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began in 2024 with a simple idea: to provide a platform where customers can easily discover, explore and purchase a wide range of products from the comfort of their homes.</p>
          <p className='text-lg leading-relaxed'>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <b className='text-gray-800 dark:text-white text-xl'>Our Mission</b>
          <p className='text-lg leading-relaxed'>Our mission at E-commerce is to empower customers with choice, convenience and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-lg'>Quality Assurance:</b>
          <p className='text-gray-600 dark:text-gray-300'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-lg'>Convenience:</b>
          <p className='text-gray-600 dark:text-gray-300'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-lg'>Exceptional Customer Service:</b>
          <p className='text-gray-600 dark:text-gray-300'>Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'OUR'} text2={'TEAM'} />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20'>
        <div className='text-center'>
          <div className='w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg'>
            <span className='text-3xl font-bold text-white'>SA</span>
          </div>
          <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>Soutik Adak</h3>
          <p className='text-gray-600 dark:text-gray-300'>CEO & Founder</p>
        </div>
        <div className='text-center'>
          <div className='w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg'>
            <span className='text-3xl font-bold text-white'>JS</span>
          </div>
          <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>Jane Smith</h3>
          <p className='text-gray-600 dark:text-gray-300'>Head of Design</p>
        </div>
        <div className='text-center'>
          <div className='w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg'>
            <span className='text-3xl font-bold text-white'>MB</span>
          </div>
          <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>Mike Brown</h3>
          <p className='text-gray-600 dark:text-gray-300'>Lead Developer</p>
        </div>
      </div>

      <div className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl mb-20'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-4'>Join Our Journey</h2>
          <p className='text-gray-600 dark:text-gray-300 mb-6'>We're always looking for talented individuals to join our growing team. If you're passionate about e-commerce and innovation, we'd love to hear from you.</p>
          <button className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
            View Careers
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
