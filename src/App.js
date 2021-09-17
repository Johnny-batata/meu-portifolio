import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import { Provider } from './provider/provider';
import Projects from './pages/projects';

const App = () => {
  console.log('bah');
  return (
    <Provider>
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <Route exact path="/projects" component={ Projects } />
        <Route exact path="/" component={ Home } />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
