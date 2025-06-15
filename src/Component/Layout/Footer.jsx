import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="flex justify-evenly bg-black p-10">
        <div className='text-white w-60'>
          <h1 className='text-3xl py-5'>Dog Care</h1>
          <span>
            Duis imperdiet sapien tortor, 
            vitae congue diam auctor vitae. 
            Aliquam eget turpis ornare, 
            euismod ligul aeget, enenatis dui.
          </span>
        </div>
        <div className='flex flex-col text-white'>
          <h1 className='text-xl py-5'>CATEGORIES</h1>

          <Link to='/' className='hover:text-red-800'>Dog</Link>
          <Link to='/' className='hover:text-red-800'>Dog Care</Link>
          <Link to='/' className='hover:text-red-800'>Pets</Link>
          <Link to='/' className='hover:text-red-800'>Uncategorized</Link>
        </div>

        <div className='text-white'>
            <h1 className='text-xl py-3'>NEWSLETTER</h1>
            <h1 className='text-xl pb-3'>SUBSCRIBE US NOW</h1>
            <div className='flex'>
              <input type="email" placeholder='Enter your email' className='w-full py-2 rounded-s-xs bg-white h-8 placeholder-gray-500 outline-1 outline-white' />
              <button className='bg-white text-red-800 pr-3 h-8 outline-1 rounded-e-xs outline-white cursor-pointer hover:text-red-600'>Submit</button>
            </div>
        </div>
        
      </div>

      <div className='flex justify-evenly bg-black'>
        <span className='flex text-white py-5'>© 2025 Dogs Care. All Rights Reserved | WordPress Theme by <p className='text-red-800'> W3Layouts.</p></span>
        <div  className='flex justify-center items-center gap-5 text-white py-5'>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-linkedin"></i>
        </div>
      </div>
    </>
  )
}

export default Footer
