import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { PlannerProvider } from './context/PlannerContext';

render(
  <React.StrictMode>
    <PlannerProvider>
      <App />
    </PlannerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
