import React from 'react';
import { NoSsr } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Header } from './components';
import Routes from './routes';
import client from './client';
import { Tracker } from './tracker';

function App({ errorTracker }: { errorTracker: Tracker }) {
  const TrackerProvider = React.createContext<Tracker>(errorTracker);
  return (
    <ApolloProvider client={client}>
      <NoSsr>
        <React.StrictMode>
          <TrackerProvider.Provider value={errorTracker}>
            <Router>
              <Header />
              <Routes />
            </Router>
          </TrackerProvider.Provider>
        </React.StrictMode>
      </NoSsr>
    </ApolloProvider>
  );
}

export default App;
