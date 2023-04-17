import React, { useContext } from 'react';
import Services from '../data/Services';
import Products from '../data/Products';
import './Order.css'
import AppContext from '../context/AppContext';

function Order() {
  const { product, setProduct } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    

    switch (name) {
      case 'product':
        setProduct(Products.filter((product) => product.name === value));
        break;    
      default:
        break;
    }
  };

  const getServices = () => {
    return (
      <select>
        {Services.map((service, index) => (
          <option key={ `option-${index}` }>{ service.name }</option>
      ))}
      </select>
    )
  };

  const getProducts = () => {
    return (
      <select name="product" onChange={(e) =>handleChange(e)}>
        <option>Selecione uma peça</option>
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
          <button type="button">Adicionar</button>
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
          <button type="button">Adicionar</button>
        </fieldset>
        <fieldset>
          <legend>Ordem de serviço</legend>
        </fieldset>
      </form>
    </main>
  )
}

export default Order