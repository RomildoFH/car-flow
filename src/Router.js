import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'

function Routers() {
  return (
    <Routes>
      <Route exact path="/car-flow" element={ <Home /> } />
      <Route path="/car-flow/ordem" element={ <Order /> } />
    </Routes>
  )
}

export default Routers