import React, { useState, useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Weather from './Weather'

const Navbar = () => {

  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, logout, navigate, isDarkMode, toggleDarkMode } = useContext(ShopContext);

  return (
    <>
      <div className='flex item-center justify-between py-5 font-medium bg-gradient-to-r from-white via-blue-50 to-purple-50 shadow-sm border-b border-gray-100' >
        <Link to='/'><img src={assets.logo} className='w-36 hover:scale-105 transition-transform duration-300' alt="logo" /></Link>

        <ul className='hidden py-7 sm:flex gap-5 text-sm text-gray-700 ' >
          <NavLink to='/' className='flex flex-col items-center gap-1 hover:text-blue-600 transition-colors duration-300'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gradient-to-r from-blue-500 to-purple-600 hidden' />
          </NavLink>
          <NavLink to='/collection' className='flex flex-col items-center gap-1 hover:text-blue-600 transition-colors duration-300'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gradient-to-r from-blue-500 to-purple-600 hidden' />
          </NavLink>
          <NavLink to='/about' className='flex flex-col items-center gap-1 hover:text-blue-600 transition-colors duration-300'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gradient-to-r from-blue-500 to-purple-600 hidden' />
          </NavLink>
          <NavLink to='/contact' className='flex flex-col items-center gap-1 hover:text-blue-600 transition-colors duration-300'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gradient-to-r from-blue-500 to-purple-600 hidden' />
          </NavLink>
        </ul>

        <div className='flex items-center gap-6' >
          <Weather />
          <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer hover:scale-110 transition-transform duration-300' alt="" />

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className='w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110'
          >
            {isDarkMode ? (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <div className='group relative' >
            <img className='w-5 cursor-pointer hover:scale-110 transition-transform duration-300' src={assets.profile_icon} alt="" />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4' >
            <div className='flex flex-col gap-2 w-40 py-4 px-6 bg-white text-gray-600 rounded-xl shadow-xl border border-gray-100' >
              <p className='cursor-pointer hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-300 font-medium' onClick={() => navigate('/profile')}>My Profile</p>
              <p className='cursor-pointer hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-lg transition-all duration-300 font-medium' onClick={() => navigate('/orders')}>Orders</p>
              <hr className='my-2 border-gray-200' />
              <p className='cursor-pointer hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition-all duration-300 font-medium' onClick={logout}>LogOut</p>
            </div>
            </div>
          </div>
          <Link to='/cart' className='relative hover:scale-110 transition-transform duration-300'>
            <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white aspect-square rounded-full text-[8px] shadow-lg' >{getCartCount()}</p>
          </Link>
          <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden hover:scale-110 transition-transform duration-300' alt="" />

        </div>

        {/*sidebar menu for small screen*/}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`} >
          <div className='flex flex-col text-gray-600' >
            <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
              <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/' >HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection' >COLLECTION</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about' >ABOUT</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact' >CONTACT</NavLink>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar
