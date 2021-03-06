import React from 'react';
import ReactDOM from 'react-dom';

// components
import App from './App';

// styles
import './styles/index.css';

// conditional import
if (process.env.NODE_ENV === 'development') {
  require('./services/miragejs/server').makeServer();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
