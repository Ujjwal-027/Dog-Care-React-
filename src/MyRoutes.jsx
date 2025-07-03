import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import Service from './pages/Service'
import Notfound from './pages/Notfound'

const MyRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route>
            <Route path='/' element={<Layout/>}>

                <Route index element={<Homepage/>} />
                <Route path='/aboutus' element={<AboutUs/>} />
                <Route path='/service' element={<Service/>}/>
                
                
            </Route>

            <Route path='/notfound' element={<Notfound/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
