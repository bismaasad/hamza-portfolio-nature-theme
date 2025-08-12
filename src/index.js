import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

// 🟡 Global Axios base URL — so you don't repeat localhost:5000 everywhere
axios.defaults.baseURL = 'http://localhost:5000';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
