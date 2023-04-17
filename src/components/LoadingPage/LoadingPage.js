import React, { useContext, useEffect } from 'react'
import AppContext from '../../context/AppContext';
import Logo from '../../images/Logo_Nova.png';
import "./LoadingPage.css";
import dataBase from '../../data/Products'

function LoadingPage() {

  const {setIsLoading, setProductList } = useContext(AppContext);

    useEffect(() => {
    const data = () => {
      const fetch = dataBase;
      return fetch;
    }
    setProductList(data());

    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])

  return (
    <div>
      <div>
        <img className="logo-loading" src={Logo} alt="Carregando" />
      </div>
    </div>
  )
}

export default LoadingPage