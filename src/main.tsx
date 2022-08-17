// import "bootstrap/dist/css/bootstrap.min.css";
import "./reset.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootswatch/dist/flatly/bootstrap.min.css";

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
