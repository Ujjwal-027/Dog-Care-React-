import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav className='grid grid-cols-5 bg-black'>

        <h1 className='col-spal-1 font-bold text-2xl text-center text-white py-5'>Dog care</h1>

        <section className='col-span-3 flex justify-evenly items-center bg-transparent font-bold text-center text-white py-5'>
            <Link to='/home' className='border-b-2 border-transparent hover:border-white transition-all duration-100 delay-200 '>HOME</Link>
            <Link to='/about'className='border-b-2 border-transparent hover:border-white transition-all duration-100 delay-200 '>ABOUT US</Link>
            <Link to='/service'className='border-b-2 border-transparent hover:border-white transition-all duration-100 delay-200 '>SERVICE</Link>
            <Link to='/Pages'className='border-b-2 border-transparent hover:border-white transition-all duration-100 delay-200 '>PAGES</Link>
            <Link to='/contact'className='border-b-2 border-transparent hover:border-white transition-all duration-100 delay-200 '>CONTACT</Link>
        </section>

        <section className='flex col-span-1 item-center py-5 pr-5'>
            <input type="search" placeholder='enter a keyword' className='w-full rounded-s-sm bg-white h-8 placeholder-gray-500 outline-1 outline-white' />
            <button className='bg-white text-red-800 rounded-e-sm pr-3 h-8 outline-1 outline-white cursor-pointer hover:text-red-600'>Search</button>
        </section>
    </nav>
      
    </>
  )
}

export default Header
