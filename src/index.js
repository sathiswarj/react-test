import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalState from './Components/Function/Context';  
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ShoppingCartProvider from './Components/Context';
import { BrowserRouter } from 'react-router-dom';
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <GlobalState>   
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
      </GlobalState>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
