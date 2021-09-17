import React from 'react';
import { Link } from 'react-router-dom';
import github from '../imgs/githubnew.png';
import linkedin from '../imgs/linkedin111.png';
import '../css/footer.css';

const Footer = () => {
  console.log('ba');
  return (
    <footer className="footer">
      <h3>Informações para contato: </h3>
      <div className="div-footer-imgs">
        <Link to={ { pathname: 'https://github.com/Johnny-batata' } } target="_blank">
          <img src={ github } alt="foto" className="network-photos" />
        </Link>
        <Link to={ { pathname: 'https://www.linkedin.com/in/johnny-arguello-95b451217/' } } target="_blank">
          <img src={ linkedin } alt="foto" className="network-photos" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
