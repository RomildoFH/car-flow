import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main>
      <h1 className="page-title">Car Flow</h1>
      <p className="page-subtitle">A melhor forma de gerir seus serviços</p>
      <section className="home-controler">
        <Link to="/gerar-ordem">
          <button>Gerar Ordem</button>
        </Link>
        <Link to="/ordens">
          <button>Ordens de Serviço</button>
        </Link>
        <Link to="/ocupacao">
          <button>Ocupação</button>
        </Link>
        <Link to="/relatorio">
          <button>Relatório</button>
        </Link>
      </section>
    </main>
  )
}

export default Home