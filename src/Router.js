import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function Routers() {
  return (
    <Routes>
      <Route exact path="/car-flow" element={ <Home /> } />
    </Routes>
  )
}

export default Routers