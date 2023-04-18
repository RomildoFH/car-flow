import React, { useContext } from 'react';
import './Orders.css';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';

function Orders() {
  const {
    setOrder,
    orderList,
    setOrderList,
  } = useContext(AppContext);

  const getTotal = (budget) => {
    return (
      (budget.reduce((acc, curr) => {
        return (acc + curr.price)
      }, 0)).toFixed(2)
    )
  };

  const deleteOrder = (id) => {
    const newOrderList = orderList.filter((order) => order.id !== id);
    setOrderList(newOrderList);
  };

  const defineStatus = (id) => {
    const filtredOrder = orderList.filter((o) => o.id === id)[0];

    if(!filtredOrder.startedAt) {
      return 'Aguardando';
    }
    if(!filtredOrder.finishedAt) {
      return 'Em andamento';
    }
    if(filtredOrder.finishedAt) {
      return 'Finalizada';
    }
  };

  const generateOrders = () => {
    return (
      orderList.map((order, index) => {
        const {
          id,
          customer,
          budget,
          openAt,
          startedAt,
          finishedAt,
        } = order;

        return (
        <tr key={ index }>
          <td>{ order.id }</td>
          <td>{ customer.name }</td>
          <td>{ customer.phone }</td>
          <td>
            {
              `R$ ${getTotal(budget)}`
            }
          </td>
          <td>{ openAt.replace('T', ' ').replace('.137Z', '') }</td>
          <td>{ startedAt.replace('T', ' ').replace('.137Z', '') }</td>
          <td>{ finishedAt.replace('T', ' ').replace('.137Z', '') }</td>
          <td>
            {
              `${defineStatus(id)}`
            }            
          </td>
          <td>
            <Link to={`/car-flow/ordens/${id}`}>
              <span className="controller-option" onClick={() => setOrder(order)}>📂</span>
            </Link>
            <span onClick={() => deleteOrder(id)} className="controller-option">🗑</span>
          </td>
        </tr>
        )
      })
    )
  }

  return (    
    <main className="page-container">
      <table className="orders-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Cliente</th>
            <th>Contato</th>
            <th>Orçamento</th>
            <th>Abertura</th>
            <th>Inicio</th>
            <th>Término</th>
            <th>Status</th>
            <th>Abrir/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            generateOrders()
          }
        </tbody>
      </table>
    </main>
  )
}

export default Orders;
