import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContextProvider } from 'context/AppContext';
import { App } from './app';
import { MuiThemeProvider } from './MuiThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </AppContextProvider>
  </React.StrictMode>
);
