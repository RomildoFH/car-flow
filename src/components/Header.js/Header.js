import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Logo from '../../images/cabecalho.png'
import './Header.css';

function Header() {

  const {
    setEmail,
  } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  }

  return (
    <header>
      <div className="logo-container">
        <Link to={ `/car-flow` }>
          <img className="logo-header" src={Logo} alt="logo.png" />        
        </Link>
      </div>
      <form className="login-container">
        <label>
          e-mail
          <input name="email" type="text" onChange={ (e) => handleChange(e) } />
        </label>
        <label>
          senha
          <input name="password" type="text" onChange={ (e) => handleChange(e) } />
        </label>
        <button>Entrar</button>
      </form>
    </header>
  )
}

export default Header