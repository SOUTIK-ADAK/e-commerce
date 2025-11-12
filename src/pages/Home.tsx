import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import Chatbot from '../components/Chatbot'

const Home = () => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <Hero/>
        <LatestCollection/>
        <BestSeller/>
        <OurPolicy/>
        <NewsLetterBox/>
      </div>
      <Chatbot />
    </>
  )
}

export default Home
