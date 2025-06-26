import React from 'react'

const AboutUs = () => {
  return (
    <>
        <div className='bg-[url(assets/inner.jpg)] bg-center bg-cover h-80'></div>

        <section>
            <div className="flex flex-row justify-evenly items-center pt-20 pb-20">
                <div className='flex flex-col justify-center w-150'>
                    <h1 className='text-4xl font-semi-bold'>Few Words About Our Care</h1>
                    <p className='text-xl pt-5 text-gray-500'>
                        Consectetur adipiscing elit. Aliquam sit amet efficitur tortor.
                        Uspendisse efficitur orci urna. In et augue ornare, tempor massa in, luctus sapien.
                    </p>
                    <div className='flex flex-row'>
                        <div className='text-xl text-orange-400'>
                            <i class="bi bi-arrow-right-circle"></i>
                        </div>
                        <p className='text-xl text-gray-500 pl-3'>Ut enim ad minim veniam</p>
                    </div>

                    <div className='flex flex-row'>
                        <div className='text-xl text-orange-400'>
                            <i class="bi bi-arrow-right-circle"></i>
                        </div>
                        <p className='text-xl text-gray-500 pl-3'>Quis nostrud exercitation ullamco laboris</p>
                    </div>

                    <div className='flex flex-row'>
                        <div className='text-xl text-orange-400'>
                            <i class="bi bi-arrow-right-circle"></i>
                        </div>
                        <p className='text-xl text-gray-500 pl-3 pb-10'>Nisi ut aliquip ex ea commodo consequat</p>
                    </div>

                    <button className='bg-amber-600 text-white border-1 p-2 w-50 rounded-sm border-amber-600 outline-1 outline-amber-600 cursor-pointer hover:text-amber-600 hover:border-amber-600 hover:bg-white transition-all duration-300 delay-50'>View Our Service</button>


                </div>
                <div>
                    <img src="./assets/about2.jpg" alt="" />
                </div>
            </div>
        </section>

        {/* Team */}

        <section className='bg-gray-100'>
            <div>
                <div className='flex flex-col justify-center items-center pt-10 pb-5'>
                    <h1 className='text-4xl font-semibold'>Team Of Professionals</h1>
                    <p className='text-2xl text-gray-500 w-200 text-center pt-5 pb-10'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque, eaque ipsa quae ab illo inventore.</p>
                </div>
                
                <div className='flex flex-row justify-evenly items-center pt-5 pb-10 mr-40 ml-40'>
                    <div className='flex flex-col justify-center items-center w-80 h-auto transition delay-100 duration-300 p-5 rounded-lg'>
                        <img src="assets/team1.jpg" alt=""/>
                        <h1 className='text-2xl text-gray-800'>Jhon Doe</h1>
                        <p className='text-xl text-gray-500'>CEO</p>

                        <div className='flex flex-row justify-center items-center pt-5 pl-3 text-gray-500'>
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-twitter pl-3"></i>
                            <i class="bi bi-instagram pl-3"></i>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center w-80 h-auto transition delay-100 duration-300 p-5 rounded-lg'>
                        <img src="assets/team2.jpg" alt=""/>
                        <h1 className='text-2xl text-gray-800'>Alexander</h1>
                        <p className='text-xl text-gray-500'>Field Manager</p>

                        <div className='flex flex-row justify-center items-center pt-5 pl-3 text-gray-500'>
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-twitter pl-3"></i>
                            <i class="bi bi-instagram pl-3"></i>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center w-80 h-auto transition delay-100 duration-300 p-5 rounded-lg'>
                        <img src="assets/team3.jpg" alt=""/>
                        <h1 className='text-2xl text-gray-800'>Martin Ker</h1>
                        <p className='text-xl text-gray-500'>Co-ordinator</p>

                        <div className='flex flex-row justify-center items-center pt-5 pl-3 text-gray-500'>
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-twitter pl-3"></i>
                            <i class="bi bi-instagram pl-3"></i>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center w-80 h-auto transition delay-100 duration-300 p-5 rounded-lg'>
                        <img src="assets/team4.jpg" alt=""/>
                        <h1 className='text-2xl text-gray-800'>Elizabeth</h1>
                        <p className='text-xl text-gray-500'>Manager</p>

                        <div className='flex flex-row justify-center items-center pt-5 pl-3 text-gray-500'>
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-twitter pl-3"></i>
                            <i class="bi bi-instagram pl-3"></i>
                        </div>
                    </div>
                

                </div>
            </div>
        </section>
    </>
  )
}

export default AboutUs
