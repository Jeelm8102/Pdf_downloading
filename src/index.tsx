// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'; // Ensure you have your styles imported

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
