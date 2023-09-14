import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppContextProvider } from 'context/AppContext';
import { App } from './app';
import { MuiThemeProvider } from './MuiThemeProvider';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
