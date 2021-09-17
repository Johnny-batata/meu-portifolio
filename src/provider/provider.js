import React, { createContext, useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const path = history.location.pathname;

const myContext = createContext();

const Provider = ({ children }) => {
  const [location, setLocation] = useState('');

  const Context = {
    location, setLocation,
  };

  useEffect(() => {
    setLocation(path);
  }, []);

  return (
    <myContext.Provider value={ Context }>{children}</myContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Provider, myContext };
