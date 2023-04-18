import React, { useContext } from 'react';
import Services from '../data/Services';
import Products from '../data/Products';
import './Order.css'
import AppContext from '../context/AppContext';

function GenerateOrder() {
  const {
    product,
    setProduct,
    service,
    setService,
    budget,
    setBudget,
    customer,
    setCustomer,
    setOrder,
    orderList,
    setOrderList,
  } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;    
    const client = {...customer};

    switch (name) {
      case 'product':
        setProduct(Products.filter((product) => product.name === value));
        break;    
      case 'service':
        setService(Services.filter((service) => service.name === value));
        break;      
        case 'name':
          client.name = value
          setCustomer(client);
          break;
        case 'car':
          client.car = value
          setCustomer(client);
          break;
        case 'plate':
          client.plate = value
          setCustomer(client);
          break;
        case 'year':
          client.year = value
          setCustomer(client);
          break;
        case 'phone':
          client.phone = value
          setCustomer(client);
          break;
      default:
        break;
    }
  };

  const generateBudget = () => {
    return (
      <tbody>
        {
          budget.map((e, index) => {
            return (
              <tr key={ index }>
                <td>{ e.name }</td>
                <td>{ e.type }</td>
                <td>{ e.price.toFixed(2) }</td>
                <td name="delete" onClick={() => handleClick({target: {name: 'delete', value: index}})}>X</td>
              </tr>
            )
          })
        }
      </tbody>
    )
  };

  const handleClick = ({ target }) => {
    const { name, value } = target;
    const currentBudget = [...budget];

    switch (name) {
      case 'add-service':
        currentBudget.push({...service[0], type: 'Serviço'})
        setBudget(currentBudget);
        break;
      case 'add-product':
        currentBudget.push({...product[0], type: 'Produto'})
        setBudget(currentBudget);
        break;
      case 'delete':
        setBudget(currentBudget.filter((_e, index) => index !== value));
        break;
      default:
        break;
    }
  };

  const getServices = () => {
    return (
      <select name="service" onChange={handleChange}>
        {Services.map((service, index) => (
          <option key={ `option-${index}` }>{ service.name }</option>
      ))}
      </select>
    )
  };

  const getProducts = () => {
    return (
      <select name="product" onChange={(e) =>handleChange(e)}>
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
    return (
      <td>{ (budget.reduce((acc, curr) => {
        return (acc + curr.price)
      }, 0)).toFixed(2) }</td>
    )
  };

  const generateOrder = () => {
    const id = orderList.length + 1;
    const open = (new Date()).toISOString()
    const newOrder = {
      customer,
      budget,
      id,
      status: 'Aprovação Pendente',
      openAt: open,
      startedAt: '',
      finishedAt: '',
    };
    setOrder(newOrder);
    const newOrderList = [...orderList, newOrder];
    setOrderList(newOrderList);
    setBudget([]);
    setCustomer({name: '', car: '', plate: '', year: '', phone: ''})
    setProduct([]);
    setService([]);
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
              onChange={(e) => handleChange(e)}
              value={customer.name}
            />
          </label>
          <label>
            Carro:
            <input
              className="input-data-text"
              type="text"
              name="car"
              onChange={(e) => handleChange(e)}
              value={customer.car}
            />
          </label>
          <label>
            Placa:
            <input
              className="input-data-text"
              type="text"
              name="plate"
              onChange={(e) => handleChange(e)}
              value={customer.plate}
            />
          </label>
          <label>
            Ano:
            <input
              className="input-data-text"
              type="text"
              name="year"
              onChange={(e) => handleChange(e)}
              value={customer.year}
            />
          </label>
          <label>
            Telefone:
            <input
              className="input-data-text"
              type="text"
              name="phone"
              onChange={(e) => handleChange(e)}
              value={customer.phone}
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
                <td>Tipo</td>
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
                <td></td>
                {
                  (budget.length > 0) ? getTotal() : null
                }
              </tr>
            </tfoot>
          </table>
          <button type="button" onClick={generateOrder}>Gerar</button>
          <button>Cancelar</button>
        </fieldset>
      </form>
    </main>
  )
}

export default GenerateOrder;
