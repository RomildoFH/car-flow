import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GenerateOrder from './pages/GenerateOrder'
import Home from './pages/Home'
import OrderDetails from './pages/OrderDetails'
import Orders from './pages/Orders'

function Routers() {
  return (
    <Routes>
      <Route exact path="/car-flow" element={ <Home /> } />
      <Route path="/car-flow/gerar-ordem" element={ <GenerateOrder /> } />
      <Route exact path="/car-flow/ordens" element={ <Orders /> } />
      <Route path="/car-flow/ordens/:id" element={ <OrderDetails /> } />
    </Routes>
  )
}

export default Routers