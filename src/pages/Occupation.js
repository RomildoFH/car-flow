import React from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Employees from '../data/Employees';
import './Occupation.css';

function Occupation() {
  const { orderList } = useContext(AppContext);

  const generateEmployeeData = () => {

  const getAverageTime = (employee) => {
    const finishedOrders = orderList.filter((order) => order.mechanic === employee &&
      order.status === "Finalizada")
      .map((o) => ((new Date(o.finishedAt) - new Date(o.startedAt))) * (0.27777 * (10 ** (-6))));
    
    const summatory = finishedOrders.reduce((acc, curr) => { return acc + curr }, 0)

    if (summatory > 0) {
      return ((summatory / finishedOrders.length).toFixed(2));
    }
    return 0;
  };

    return (
      <tbody>
        {
          Employees.map((employee, index) => (
            <tr key={ index }>
              <td>{ employee.name }</td>
              <td>
                {
                  orderList.filter((order) => order.mechanic === employee.name &&
                    order.status === "Em andamento").length
                }
              </td>
              <td>
                {
                  orderList.filter((order) => order.mechanic === employee.name &&
                    order.status === "Em andamento")
                    .map((o, index) => <p key={index}>{ o.customer.plate }</p>)
                }
              </td>
              <td>
                {
                  orderList.filter((order) => order.mechanic === employee.name &&
                    order.status === "Finalizada").length
                }
              </td>
              <td>
                {
                  orderList.filter((order) => order.mechanic === employee.name &&
                    order.status === "Finalizada")
                    .map((o, index) => <p key={index}>{ o.customer.plate }</p>)
                }
              </td>
              <td>
                {
                  getAverageTime(employee.name)
                }
              </td>
            </tr>
          ))
        }
      </tbody>
    )
  }

  return (
    <main className="page-container">
      <table className="orders-table">
        <thead>
          <tr>
            <th rowSpan={2}>Colaborador(a)</th>
            <th colSpan={2}>Atendendo</th>
            <th colSpan={2}>Finalizados</th>
            <th rowSpan={2}>Tempo médio</th>
          </tr>
          <tr>
            <th>Quant.</th>
            <th>Placas</th>
            <th>Quant.</th>
            <th>Placas</th>
          </tr>
        </thead>
        {
          generateEmployeeData()
        }
      </table>
    </main>
  )
}

export default Occupation