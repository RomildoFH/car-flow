import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider( { children } ) {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState({});
  const [product, setProduct] = useState({});

  const values = useMemo(() => ({
    isLoading,
    setIsLoading,
    productList,
    setProductList,
    product,
    setProduct,
  }), [
    isLoading,
    productList,
    product,
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
