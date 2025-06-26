import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'

const MyRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route>
            <Route path='/' element={<Layout/>}>

                <Route index element={<Homepage/>} />
                <Route path='/aboutus' element={<AboutUs/>} />
                
            </Route>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
