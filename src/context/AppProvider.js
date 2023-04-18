import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider( { children } ) {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState([]);
  const [service, setService] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [partList, setPartList] = useState([]);

  const values = useMemo(() => ({
    isLoading,
    setIsLoading,
    productList,
    setProductList,
    product,
    setProduct,
    service,
    setService,
    serviceList,
    setServiceList,
    partList,
    setPartList,
  }), [
    isLoading,
    productList,
    product,
    service,
    serviceList,
    partList,
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
