import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Base } from './_config/globalstyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Base />
    <App />
  </React.StrictMode>
);

