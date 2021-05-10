import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataState } from './hoc/dataState';

ReactDOM.render(
  <DataState>
    <App />
  </DataState>,
  document.getElementById('root')
);
