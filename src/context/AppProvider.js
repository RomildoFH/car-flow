import React, { useMemo, useState } from 'react'
import AppContext from './AppContext';

function AppProvider( { children } ) {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState({});

  const values = useMemo(() => ({
    isLoading,
    setIsLoading,
    productList,
    setProductList,
  }), [
    isLoading,
    productList,
  ])

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
