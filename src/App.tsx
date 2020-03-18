import React from 'react';
import { NoSsr } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components';
import Routes from './routes';

function App() {
  return (
    <NoSsr>
      <Router>
        <Header />
        <Routes />
      </Router>
    </NoSsr>
  );
}

export default App;
