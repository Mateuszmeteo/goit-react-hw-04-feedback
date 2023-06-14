import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { Interface } from 'components/App'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Interface />  */}
  </React.StrictMode>
);
