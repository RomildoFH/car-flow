import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import Orders from '../data/Orders';

function AppProvider( { children } ) {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState([]);
  const [service, setService] = useState([]);
  const [budget, setBudget] = useState([]);
  const [customer, setCustomer] = useState({
    name: '',
    car: '',
    plate: '',
    year: '',
    phone: '',
  });
  const [order, setOrder] = useState({});
  const [orderList, setOrderList] = useState(Orders);

  const values = useMemo(() => ({
    isLoading,
    setIsLoading,
    productList,
    setProductList,
    product,
    setProduct,
    service,
    setService,
    budget,
    setBudget,
    customer,
    setCustomer,
    order,
    setOrder,
    orderList,
    setOrderList,

  }), [
    isLoading,
    productList,
    product,
    service,
    budget,
    customer,
    order,
    orderList,
  ])

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.shape({}),
}

export default AppProvider;
