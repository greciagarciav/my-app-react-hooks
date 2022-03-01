import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import Register from './Register';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Login />
    <Register />
  </React.StrictMode>,
  document.getElementById('root')
);