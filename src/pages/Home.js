import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main>
      <h1 className="page-title">Car Flow</h1>
      <p className="page-subtitle">A melhor forma de gerir seus serviços</p>
      <section className="home-controler">
        <Link to="/car-flow/ordem">
          <button>Gerar Ordem</button>
        </Link>
        <button>Ocupação</button>
        <button>Relatório</button>
      </section>
    </main>
  )
}

export default Home