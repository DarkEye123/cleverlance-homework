import React from 'react';
import { NoSsr } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Header } from './components';
import Routes from './routes';
import client from './client';
import { Tracker } from './tracker';
import { ErrorBoundary } from './components';
import { TrackerContext } from './ctx';

function App({ errorTracker }: { errorTracker: Tracker }) {
  return (
    <TrackerContext.Provider value={errorTracker}>
      <ErrorBoundary>
        <ApolloProvider client={client}>
          <NoSsr>
            <React.StrictMode>
              <Router>
                <Header />
                <Routes />
              </Router>
            </React.StrictMode>
          </NoSsr>
        </ApolloProvider>
      </ErrorBoundary>
    </TrackerContext.Provider>
  );
}

export default App;
