import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GenerateOrder from './pages/GenerateOrder'
import Home from './pages/Home'
import OrderDetails from './pages/OrderDetails'
import Orders from './pages/Orders'

function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route path="/gerar-ordem" element={ <GenerateOrder /> } />
      <Route exact path="/ordens" element={ <Orders /> } />
      <Route path="/ordens/:id" element={ <OrderDetails /> } />
    </Routes>
  )
}

export default Routers