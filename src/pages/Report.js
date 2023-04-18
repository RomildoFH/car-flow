import React, { useContext, useEffect, useState } from 'react';
import LoadingPage from '../components/LoadingPage/LoadingPage';
import AppContext from '../context/AppContext';
import './Report.css';

function Report() {

  const { orderList } = useContext(AppContext);

  const [services, setServices] = useState([]);
  const [parts, setParts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const convertDate = (date) => {
    const year = `${date[0]+date[1]+date[2]+date[3]}`;
    const month = `${date[5]+date[6]}`;
    const day = `${date[8]+date[9]}`;

    return `${year}-${month}-${day}`
  };

  const getData = () => {
    const arrayServices = [];
    const arrayParts = [];
    const filtredList = orderList.filter((order) => order.status === "Finalizada")
    filtredList.forEach((order) => {
      order.budget.forEach((servico) => {
        servico.date = convertDate(order.finishedAt);
        if (servico.type === 'Serviço') {
          arrayServices.push(servico);
        }
        if (servico.type === 'Produto') {
          arrayParts.push(servico);
        }
      })
    });
    setServices(arrayServices);
    setParts(arrayParts);
  }

  const getTotal = (array) => {
    return (
      (array.reduce((acc, curr) => {
        return (acc + curr.price)
      }, 0)).toFixed(2)
    )
  };


  useEffect(() => {
    if(services.length < 1) {
      getData();
    }    
    setIsLoading(false)
  }, [services, parts])

  const getServices = () => {
    return (
      <tbody>
        {
          services.map((service, index) => (
            <tr key={index}>
              <td>{ service.name }</td>
              <td>{ service.date }</td>
              <td>{ `R$ ${service.price.toFixed(2)}` }</td>
            </tr>
          ))
        }
        <tr>
          <td><strong>Total</strong></td>
          <td></td>
          <td><strong>{ `R$ ${getTotal(services)}` }</strong></td>
        </tr>
      </tbody>
    )
  };

  const getProducts = () => {
    return (
      <tbody>
        {
          parts.map((part, index) => (
            <tr key={index}>
              <td>{ part.name }</td>
              <td>{ part.date }</td>
              <td>{ `R$ ${part.price.toFixed(2)}` }</td>
            </tr>
          ))
        }
        <tr>
          <td><strong>Total</strong></td>
          <td></td>
          <td><strong>{ `R$ ${getTotal(parts)}` }</strong></td>
        </tr>
      </tbody>
    )
  };

  return (
    isLoading ? <LoadingPage /> :
    <main className="page-container">
      <h3>Tabela de serviços (finalizados)</h3>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Serviço</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>
        {
          getServices()
        }
      </table>
      <h3>Tabela de produtos vendidos</h3>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>
        {
          getProducts()
        }
      </table>
    </main>
  )
}

export default Report