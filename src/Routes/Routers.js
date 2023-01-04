import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Catalogue from '../pages/Catalogue/Catalogue'
import HomePage from '../pages/Home/HomePage'


const Routers = () => {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='catalogue' element={<Catalogue />} />
      {/* <Route path='fashion' element={<Fashion />} />
      <Route path='favorite' element={<Favorite />} />
      <Route path='lifestyle' element={<Lifestyle />} />
      <Route path='signup' element={<Signup />} /> */}
    </Routes>
  )
}

export default Routers