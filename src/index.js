import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style-global.css';
import 'react-toastify/dist/ReactToastify.css';
import '@material-ui/core';
import './components/ColorPalette/colors.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
