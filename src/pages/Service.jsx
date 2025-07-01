import React from 'react'

const Service = () => {
  return (
    <>
        <div className='bg-[url(assets/inner.jpg)] bg-center bg-cover h-80'></div>

        <section>
            <div className='text-center pt-10 pb-10'>
                <span className='text-4xl font-semibold'>Our Services</span>
                <p className='text-2xl text-gray-500 pl-80 pr-80 pt-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
                     eaque ipsa quae ab illo inventore.</p>
            </div>

            <div className='flex justify-center items-center pt-10 pb-10 mr-40 ml-40'>
                <div className='flex flex-col gap-5'>
                    <div className='border-1 border-gray-300 rounded-sm p-3'>
                        <div className='flex'>
                            <div className='text-3xl text-orange-400 '>
                                <i class="bi bi-amazon"></i>
                            </div>
                            <h1 className='text-2xl pl-6 font-semibold '>Dog Sitting</h1>
                        </div>
                        <p className='text-xl w-90 text-gray-500 pl-12 pt-5'>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan.</p>
                    </div>

                    <div className='border-1 border-gray-300 rounded-sm p-3'>
                        <div className='flex'>
                            <div className='text-3xl text-orange-400 '>
                                <i class="bi bi-amazon"></i>
                            </div>
                            <h1 className='text-2xl pl-6 font-semibold '>Dog Sitting</h1>
                        </div>
                        <p className='text-xl w-90 text-gray-500 pl-12 pt-5'>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan.</p>
                    </div>
                </div>

                <div className='flex flex-col gap-5 pl-5'>
                    <div className='border-1 border-gray-300 rounded-sm p-3'>
                        <div className='flex'>
                            <div className='text-3xl text-orange-400 '>
                                <i class="bi bi-amazon"></i>
                            </div>
                            <h1 className='text-2xl pl-6 font-semibold '>Dog Sitting</h1>
                        </div>
                        <p className='text-xl w-90 text-gray-500 pl-12 pt-5'>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan.</p>
                    </div>

                    <div className='border-1 border-gray-300 rounded-sm p-3'>
                        <div className='flex'>
                            <div className='text-3xl text-orange-400 '>
                                <i class="bi bi-amazon"></i>
                            </div>
                            <h1 className='text-2xl pl-6 font-semibold '>Dog Sitting</h1>
                        </div>
                        <p className='text-xl w-90 text-gray-500 pl-12 pt-5'>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan.</p>
                    </div>
                </div>

                <div className='flex flex-col gap-5 pl-5'>
                    <div className='border-1 border-gray-300 rounded-sm p-3'>
                        <div className='flex'>
                            <div className='text-3xl text-orange-400 '>
                                <i class="bi bi-amazon"></i>
                            </div>
                            <h1 className='text-2xl pl-6 font-semibold '>Dog Sitting</h1>
                        </div>
                        <p className='text-xl w-90 text-gray-500 pl-12 pt-5'>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan.</p>
                    </div>

                    <div className='border-1 border-gray-300 rounded-sm p-3'>
                        <div className='flex'>
                            <div className='text-3xl text-orange-400 '>
                                <i class="bi bi-amazon"></i>
                            </div>
                            <h1 className='text-2xl pl-6 font-semibold '>Dog Sitting</h1>
                        </div>
                        <p className='text-xl w-90 text-gray-500 pl-12 pt-5'>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan.</p>
                    </div>
                </div>   
            </div>

            {/* Next Service */}

            <div>
                <div>
                    <h1 className='text-4xl '>
                        Your pet is in good hands with us!
                        Let your favorite get the best care in our center.
                    </h1>

                    <span className='text-2xl text-gray-500'>
                        Nunc id ipsum fringilla, gravida felis vitae. 
                        Phasellus lacinia id, sunt in culpa quis. lacinia.
                    </span>

                    <p className='text-2xl text-gray-500'>
                        Lorem ipsum dolor, sit amet consectetur init adipisicing elit. Eos, debitis. 
                        quasssssssunt natus tempore, maiores aliquid modi gravida felis vitae amet ad minus libero.
                    </p>
                    
                    <button className='bg-orange-400 text-white px-5 py-3 rounded-sm border-1 border-orange-400 hover:text-orange-400 hover:border-1 hover:border-orange-400 hover:bg-white transition duration-300 delay-150'>
                        Read More
                    </button>
                </div>

                <div>
                    <div>
                        <div>
                            <i class="bi bi-amazon"></i>
                        </div>
                        <p>Top Class Facilities</p>
                    </div>

                </div>
            </div>
        </section>
      
    </>
  )
}

export default Service
