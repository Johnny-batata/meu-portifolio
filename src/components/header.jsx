import React from 'react';
import '../css/header.css';
import { Link, useLocation } from 'react-router-dom';

const renderMainPage = () => (
  <Link to="/">
    <p className="links">
      Main page
    </p>
  </Link>);

const Header = () => {
  const location = useLocation().pathname;
  return (
    <header className={ location === '/' ? 'mid-header' : 'header' }>
      <nav className={ location === '/' ? 'header-nav-bar' : 'header-nav-bar-new' }>
        { location !== '/'
        && renderMainPage()}
        <Link to="/projects">
          <p className="links"> Projects</p>
        </Link>

        {/* <p className="links"> About </p> */}
      </nav>
    </header>
  );
};

export default Header;
