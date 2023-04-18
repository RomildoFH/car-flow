import React, { useContext } from 'react';
import './Orders.css'
import AppContext from '../context/AppContext';

function Orders() {
  const {
    orderList,
    setOrderList,
  } = useContext(AppContext);

  const getTotal = (budget) => {
    console.log(budget)
    return (
      (budget.reduce((acc, curr) => {
        return (acc + curr.price)
      }, 0)).toFixed(2)
    )
  };

  const deleteOrder = (id) => {
    const newOrderList = orderList.filter((order) => order.id !== id);
    setOrderList(newOrderList);
  }

  const generateOrders = () => {
    return (
      orderList.map((order, index) => {
        const {
          id,
          customer,
          budget,
          status,
          openAt,
          startedAt,
          finishedAt,
          // mechanic,
        } = order;

        // const services = budget.filter((e) => e.type === 'Serviço');
        // const parts = budget.filter((e) => e.type === 'Produto');

        return (
        <tr key={ index }>
          <td>{ order.id }</td>
          <td>{ customer.name }</td>
          <td>{ customer.phone }</td>
          {/* <td>
            {
              services.map((service, index) => (<p key={index}>{ `- ${service.name}` }</p>))
            }
          </td>
          <td>
            {
              parts.map((part, index) => (<p key={index}>{ `- ${part.name}` }</p>))
            }
          </td> */}
          <td>
            {
              `R$ ${getTotal(budget)}`
            }
          </td>
          {/* <td>Mecânico</td> */}
          <td>{ openAt.replace('T', ' ').replace('.137Z', '') }</td>
          <td>{ startedAt.replace('T', ' ').replace('.137Z', '') }</td>
          <td>{ finishedAt.replace('T', ' ').replace('.137Z', '') }</td>
          <td>{ status }</td>
          <td>
            <span className="controller-option">📂</span>
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
            {/* <th>Serviços</th>
            <th>Peças</th> */}
            <th>Orçamento</th>
            {/* <th>Mecânico</th> */}
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
