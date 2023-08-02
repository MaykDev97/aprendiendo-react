import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //  No funciona en produccion  el StrictMode, eso lo para desarrollo 
  // evitar problemas con los effetos y el render
  <React.StrictMode>  
    <App />
  </React.StrictMode>,
)
