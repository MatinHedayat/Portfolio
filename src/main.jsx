import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import NotesProviders from './contexts/NotesProviders.jsx';
import { Provider } from 'react-redux';
import { core } from './core.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={core}>
    <NotesProviders>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NotesProviders>
  </Provider>
);
