import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Logo from '../../images/cabecalho.png'
import './Header.css';

function Header() {

  const {
    email,
    setEmail,
  } = useContext(AppContext);

  const [isLoged, setIsLoged] = useState(false);
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    setIsLoged(true);
  };

  return (
    <header>
      <div className="logo-container">
        <Link to={ `/` }>
          <img className="logo-header" src={Logo} alt="logo.png" />        
        </Link>
      </div>
      {
        !isLoged ? 
        <form className="login-container">
          <label>
            e-mail
            <input
              name="email"
              type="text"
              onChange={ (e) => handleChange(e) }
              value={ email }
              className="login-input"
            />
          </label>
          <label>
            senha
            <input
              name="password"
              type="password"
              onChange={ (e) => handleChange(e) }
              value={ password }
              className="login-input"
            />
          </label>
          <button type="button" onClick={ handleClick } className="login-btn">Entrar</button>
        </form> :
        <p>Seja bem vindo(a)</p>
      }
    </header>
  )
}

export default Header