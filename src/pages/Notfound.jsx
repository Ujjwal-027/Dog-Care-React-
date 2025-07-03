import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <>
        <div className='bg-[url(assets/bg.jpg)] bg-cover bg-center h-screen'>
            <div>
                <h1 className='text-9xl font-semibold text-end pt-40 pr-80 text-white'>4O4</h1>
                <h2 className='text-4xl text-end pt-5 pr-40 text-white'>Error 4O4..... Nothing was found</h2>
                <div className='flex justify-center pt-10 pl-155'>
                   <Link to={'/'} className='bg-amber-600 text-xl text-white px-8 py-3 rounded-sm border-1 border-amber-600 hover:bg-white hover:text-amber-600 hover:border-1 hover:border-white transition duration-300 delay-150'>Home Page</Link>
                </div>
            </div>
        
        
        </div>
      
    </>
  )
}

export default Notfound
