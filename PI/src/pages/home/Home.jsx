import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <>
      
    <Header />
      <main className="home">
      
        {/* Seção Hero */}
        <section className="hero">
          
          <div className="hero-image" />
          <div className="hero-content">
            <h1>Bem-vindo</h1>
            <p>
              Chega de desperdiçar,<br />
              aqui você encontrará uma <br />
              variedade de receitas<br />
              deliciosas, e o melhor,<br />
              através das sobras<br />
              das que você já utilizou.
            </p>
            <Link to="/Receitas" className="btn-primary">Veja nossas receitas</Link>
          </div>
        </section>

        {/* Seção Filtro / Chamada para ação */}
        <section className="cta">
          <div className="cta-content">
            <h2>Transforme o mundo com cada garfada!</h2>
            <p>
              Descubra o poder da comida sustentável <br />
              e divirta-se aprendendo a reaproveitar<br />
              alimentos de forma criativa e saborosa!<br />
              Aqui, você encontra receitas incríveis,<br />
              desafios interativos e dicas para <br />
              reduzir o desperdício.
            </p>
            <Link to="/Cadastro" className="btn-secondary">Cadastre-se</Link>
          </div>
          <div className="cta-image" />
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Home;
