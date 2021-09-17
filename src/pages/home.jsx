import React from 'react';
import Header from '../components/header';
import '../css/home.css';
import profilePhoto from '../imgs/photo.jpeg';
import Footer from '../components/footer';

const Home = () => (
  <main className="main-home">
    <div className="home-profile-div">
      <h1> Desenvolvedor</h1>
      <img src={ profilePhoto } alt="foto" className="home-profile-photo" />
      <p className="home-text">
        Ser capaz de transformar café e falta de sono em linhas de código
      </p>
      <h3>acesse os meus projetos abaixo: </h3>
    </div>
    <Header />
    <Footer />
  </main>
);
export default Home;
