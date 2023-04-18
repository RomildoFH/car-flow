import React, { useContext } from 'react';
import './Orders.css'
import AppContext from '../context/AppContext';

function Orders() {
  const {
    product,
    setProduct,
    service,
    setService,
    budget,
    setBudget,
    customer,
    setCustomer,
    setOrder,
    orderList,
    setOrderList,
  } = useContext(AppContext);

  return (
    
    <div>Orders</div>
  )
}

export default Orders;
