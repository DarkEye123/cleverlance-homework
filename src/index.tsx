import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import './index.css';
import App from './App';
import tracker from './tracker';

ReactDOM.render(
  <App errorTracker={tracker} />,
  document.getElementById('root'),
);
