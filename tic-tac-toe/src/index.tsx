import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { PlayersProvider } from './contexts/PlayersContext';

import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <PlayersProvider>
      <GlobalStyle />
      <App />
    </PlayersProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
