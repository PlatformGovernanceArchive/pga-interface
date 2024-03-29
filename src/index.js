import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { DataProvider } from './contexts/dataContext'

ReactDOM.render(
  <DataProvider>
    <App theme="darkTheme"/>
  </DataProvider>,
  document.getElementById('root')
);
