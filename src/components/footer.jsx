import React from 'react';
import github from '../imgs/githubnew.png';
import linkedin from '../imgs/linkedin111.png';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Informações para contato: </h3>
      <div className="div-footer-imgs">
        <a href={ 'https://github.com/Johnny-batata'  } target="_blank">
          <img src={ github } alt="foto" className="network-photos" />
        </a>
        <a href= 'https://www.linkedin.com/in/johnny-arguello-95b451217/' target="_blank">
          <img src={ linkedin } alt="foto" className="network-photos" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
