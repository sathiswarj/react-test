import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalState from './Components/Function/Context';  
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ShoppingCartProvider from './Components/Context';
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalState>   
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
      </GlobalState>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
