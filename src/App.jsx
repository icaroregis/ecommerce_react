import React from 'react';
import Routes from '../src/routes/routes';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './context/AppContextProvider';

export default function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppContextProvider>
  );
}
