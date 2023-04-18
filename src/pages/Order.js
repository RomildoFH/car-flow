import React, { useContext } from 'react';
import Services from '../data/Services';
import Products from '../data/Products';
import './Order.css'
import AppContext from '../context/AppContext';

function Order() {
  const {
    product,
    setProduct,
    service,
    setService,
    // serviceList,
    // setServiceList,
    // partList,
    // setPartList,
    budget,
    setBudget,
  } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;    

    switch (name) {
      case 'product':
        setProduct(Products.filter((product) => product.name === value));
        break;    
      case 'service':
        setService(Services.filter((service) => service.name === value));
        break;
      default:
        break;
    }
  };

  const generateBudget = () => {
    // const budget = [...partList, ...serviceList];
    return (
      <tbody>
        {
          budget.map((e, index) => {
            return (
              <tr key={ index }>
                <td>{ e.name }</td>
                <td>{ e.price.toFixed(2) }</td>
                <td>X</td>
              </tr>
            )
          })
        }
      </tbody>
    )
  };

  const handleClick = ({ target }) => {
    const { name } = target;

    // const currentServiceList = [...serviceList];
    // const currentProductList = [...partList]
    const currentBudget = [...budget]
    switch (name) {
      case 'add-service':
        // currentServiceList.push(service[0])
        // setServiceList(currentServiceList);
        currentBudget.push(service[0])
        setBudget(currentBudget);
        break;
      case 'add-product':
        // currentProductList.push(product[0])
        // setPartList(currentProductList);
        currentBudget.push(product[0])
        setBudget(currentBudget);
        break;
      default:
        break;
    }
  };

  const getServices = () => {
    return (
      <select name="service" onChange={handleChange}>
        {/* <option>Selecione um serviço</option> */}
        {Services.map((service, index) => (
          <option key={ `option-${index}` }>{ service.name }</option>
      ))}
      </select>
    )
  };

  const getProducts = () => {
    return (
      <select name="product" onChange={(e) =>handleChange(e)}>
        {/* <option>Selecione uma peça</option> */}
        {Products.map((products, index) => (
          <option key={ `option-${index}` }>{ products.name }</option>
      ))}
      </select>
    )    
  };

  const getApplication = () => {
    return (
      <ul className="product-list">
        {
          product[0].cars.map((car, index) => {
            const firstYear = car.years[0];
            const lastIndex = car.years.length - 1;
            const lastYear = car.years[lastIndex];
            return <li key={`car-${index}`}>{`${car.model} ${firstYear}-${lastYear}`}</li>
          })
        }
      </ul>
    )
  };

  const getTotal = () => {
    // const budget = [...partList, ...serviceList].map((e) => e.price);
    return (
      <td>{ budget.reduce((acc, curr) => {
        return (acc + curr.price)
      }, 0) }</td>
    )
  }

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
            />
          </label>
          <label>
            Carro:
            <input
              className="input-data-text"
              type="text"
              name="car"
            />
          </label>
          <label>
            Placa:
            <input
              className="input-data-text"
              type="text"
              name="plate"
            />
          </label>
          <label>
            Ano:
            <input
              className="input-data-text"
              type="text"
              name="year"
            />
          </label>
        </fieldset>
        <fieldset className="forms-section">
          <legend>Dados do serviço</legend>
          <label>
            Serviço:
            {
              getServices()
            }
          </label>
          <br></br>
          <p>Preço:
            {' '}
            {
              service.length > 0 ? (`R$${service[0].price.toFixed(2)}`) : null
            }
          </p>
          <button
            type="button"
            name="add-service"
            onClick={(e) => handleClick(e)}
            disabled={service.length < 1}
          >
            Adicionar
          </button>
        </fieldset>
        <fieldset className="forms-section-products">
          <legend>Dados de peças</legend>
          <label>
            Peça/Material:
            {
              getProducts()
            }
          </label>
          <br></br>
          <p>Preço:
            {' '}
            {
              product.length > 0 ? (`R$${product[0].price.toFixed(2)}`) : null
            }
          </p>
          <label>
            Aplicação:
            {
              product.length > 0
              ?
              getApplication()
              :
              <p className="instruction-text">Selecione a peça desejada</p>
            }
          </label>
          <button
            type="button"
            name="add-product"
            onClick={(e) => handleClick(e)}
            disabled={product.length < 1}
          >
            Adicionar
          </button>
        </fieldset>
        <fieldset>
          <legend>Ordem de serviço</legend>
          <table>
            <thead>
              <tr>
                <td>Produto/Serviço</td>
                <td>Preço (R$)</td>
                <td>Excluir</td>
              </tr>
            </thead>
            {
              (budget.length > 0) ? generateBudget() : null
            }
            <tfoot>
              <tr>
                <td>Total</td>
                {
                  (budget.length > 0) ? getTotal() : null
                }
              </tr>
            </tfoot>
          </table>
        </fieldset>
      </form>
    </main>
  )
}

export default Order
