import React,{ lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
//import { DataProvider } from './contexts/dataContext'

const DataProvider = React.lazy(() => import('./contexts/dataContext')); // Lazy-loaded

ReactDOM.render(

// Show a spinner while the profile is loading
  <Suspense fallback={<p style={{heigth: 100+'vh'}}>Loading</p>}>
    <DataProvider>
      <App theme="darkTheme"/>
    </DataProvider>
  </Suspense>,
  document.getElementById('root')
);
