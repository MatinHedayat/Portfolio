import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import NotesProviders from './contexts/NotesProviders.jsx';
import { Provider } from 'react-redux';
import { core } from './core.js';
import FavoritesProvider from './contexts/rick&morty/FavoritesProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={core}>
    <NotesProviders>
      <FavoritesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavoritesProvider>
    </NotesProviders>
  </Provider>
);
