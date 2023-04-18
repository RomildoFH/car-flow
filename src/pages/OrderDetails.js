import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import Employees from '../data/Employees';
import './OrderDetails.css';

function OrderDetails() {
  const {
    order,
    orderList,
    setOrderList,
  } = useContext(AppContext);

  const { customer, budget } = order;

  const [employee, setEmployee] = useState('')

  const services = budget.filter((e) => e.type === 'Serviço');
  const parts = budget.filter((e) => e.type === 'Produto');

  const getEmployees = () => {
    return (
      <select className="mechanic-select" name="employee" onChange={(e) => handleChange(e)}>
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
    console.log('clickou');
    switch (name) {
      case 'assign':
        assigningOrder.mechanic = employee;
        assigningOrder.startedAt = (new Date()).toISOString();
        console.log(employee);
        setOrderList([...otherOrders, assigningOrder])
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
            services.map((e, index) => {
              return (
                <li key={index} className="not-styled-list">{`• Ref.: ${e.id} - ${e.name};`}</li>
              )
            })
          }
        </fieldset>
        <fieldset className="sub-section">
          <legend>Material:</legend>
          {
            parts.map((e, index) => {
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
          <button type="button" name="assign" onClick={(e) => handleClick(e)}>Atribuir</button>
        </fieldset>
      </ul>
    )
  };

  return (
    <main className="page-container">
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
      </form>
    </main>
  )
}

export default OrderDetails