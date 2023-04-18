import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/GenerateOrder'

function Routers() {
  return (
    <Routes>
      <Route exact path="/car-flow" element={ <Home /> } />
      <Route path="/car-flow/gerar-ordem" element={ <Order /> } />
      <Route path="/car-flow/ordens" element={ <Order /> } />
    </Routes>
  )
}

export default Routers