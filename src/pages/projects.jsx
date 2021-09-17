import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import '../css/projects.css';
import data from '../data';
import Footer from '../components/footer';

const Projects = () => {
  console.log('batata');
  return (
    <div className="main-div-projects">
      <Header />
      <main className="main-projects">
        <h2 className="h2-project">Melhores projetos:</h2>
        <div className="sections-div">
          {
            data.map(({ name, img, linkSite, linkRepositorio }, index) => (
              <section className="projects-section" key={ index }>
                <p>
                  {name}
                </p>
                <img className="projects-img" src={ img } alt="imagem" />
                <Link to={ { pathname: linkSite } } target="_blank">
                  <p className="projects-links">Acesse o site</p>
                </Link>
                <Link to={ { pathname: linkRepositorio } } target="_blank">
                  <p className="projects-links">Acesse o repositório</p>
                </Link>

              </section>
            ))
          }
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
