import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalState from './Components/Function/Context';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalState>   
      <App />
    </GlobalState>
  </React.StrictMode>
);

reportWebVitals();
