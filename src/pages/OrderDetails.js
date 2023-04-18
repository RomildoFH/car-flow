import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Employees from '../data/Employees';
import Orders from '../data/Orders';
import LoadingPage from '../components/LoadingPage/LoadingPage';
import './OrderDetails.css';
import QrCode from '../components/QrCode/QrCode';

function OrderDetails() {
  const {
    order,
    setOrder,
    orderList,
    setOrderList,
  } = useContext(AppContext);

  
  const [employee, setEmployee] = useState('');  
  const [isLoading, setIsLoading] = useState(true);
  const [qrCode, setQrCode] = useState(false);
  
  const location = useLocation();
  const pathname = location.pathname.replace('/ordens/', '')
  const url = `https://car-flow.vercel.app/${location.pathname}`
  console.log('url', url)
  const orderId = Number(pathname);

  const [orderFiltred] = useState(Orders.filter((e) => e.id === orderId)[0]);
  
  const { customer, budget } = order;
  const getData = () => {
    return ({
      services: budget.filter((e) => e.type === 'Serviço'),
      parts: budget.filter((e) => e.type === 'Produto'),
    })
  };

  const getEmployees = () => {
    return (
      <select
      className="mechanic-select"
      name="employee"
      onChange={(e) => handleChange(e)}
      value={employee}
      disabled={ employee !== '' && order.mechanic }
      >
        <option></option>
        {
          Employees.filter((employee) => (employee.status === 'availabel'))
            .map((e) => (<option key={e.id}>{ e.name }</option>))
        }
      </select>
    )
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'employee':
        setEmployee(value);
        break;
    
      default:
        break;
    }
  };

  const handleClick = ({ target }) => {
    const { name } = target;
    const assigningOrder = {...order};
    const otherOrders = orderList.filter((o) => o.id !== order.id);
    const currentDate = employee ? (new Date()).toISOString() : ''
    switch (name) {
      case 'assign':
        assigningOrder.mechanic = employee;
        assigningOrder.startedAt = currentDate;
        setOrderList([...otherOrders, assigningOrder]);
        setOrder(assigningOrder);
        break;
      case 'finish':
        assigningOrder.finishedAt = currentDate;
        setOrderList([...otherOrders, assigningOrder]);
        setOrder(assigningOrder);
        break;
      default:
        break;
    }    
  };

  const getServicesData = () => {
    return (
      <ul>
        <fieldset className="sub-section">
          <legend>Mão de Obra:</legend>
          {
            getData().services.map((e, index) => {
              return (
                <li key={index} className="not-styled-list">{`• Ref.: ${e.id} - ${e.name};`}</li>
              )
            })
          }
        </fieldset>
        <fieldset className="sub-section">
          <legend>Material:</legend>
          {
            getData().parts.map((e, index) => {
              return (
                <li key={index} className="not-styled-list">{`• Ref.: ${e.id} - ${e.name};`}</li>
              )
            })
          }
          <label>
            Mecânico:
            {
              getEmployees()
            }
          </label>
          <button
          type="button"
          name="assign"
          onClick={(e) => handleClick(e)}
          >
            Atribuir
          </button>
        </fieldset>
      </ul>
    )
  };

  const generateQrCode = () => {
    if(!qrCode) {
      setQrCode(true);
    } else {
      setQrCode(false);
    }
  }

  useEffect(() => {
    console.log(order)
    if(!order.id) {
      setOrder(orderFiltred);
    }
    if(order.mechanic) {
      setEmployee(order.mechanic)
    }
  }, [])

  useEffect(() => {
    if(order && isLoading) {
      setIsLoading(false)
    }
  }, [order])

  return (
    isLoading ? <LoadingPage /> :
    <main className="page-container">
      {console.log('render')}
      <form>
        <fieldset className="forms-section">
          <legend>Dados do cliente</legend>
            <label>
              Nome:
              <input
                className="input-data-text big-input"
                type="text"
                name="name"
                value={customer.name}
                readOnly
              />
            </label>
            <label>
              Carro:
              <input
                className="input-data-text"
                type="text"
                name="car"
                value={customer.car}
                readOnly
              />
            </label>
            <label>
              Placa:
              <input
                className="input-data-text"
                type="text"
                name="plate"
                value={customer.plate}
                readOnly
              />
            </label>
            <label>
              Ano:
              <input
                className="input-data-text"
                type="text"
                name="year"
                value={customer.year}
                readOnly
              />
            </label>
            <label>
              Telefone:
              <input
                className="input-data-text"
                type="text"
                name="phone"
                value={customer.phone}
                readOnly
              />
            </label>
        </fieldset>
        <fieldset>
          <legend>Dados do serviço</legend>
            {
              getServicesData()
            }
        </fieldset>
        <Link to="/ordens">
          <button
            type="button"
            name="finish"
            onClick={(e) => handleClick(e)}
            disabled={!order.mechanic}
          >
            Finalizar
          </button>
        </Link>
        <button type="button" onClick={ generateQrCode }>Gerar QrCode</button>
      </form>
      {
        qrCode ? <QrCode url={ url } setQrCode={setQrCode} /> : null
      }
    </main>
  )
}

export default OrderDetails;
