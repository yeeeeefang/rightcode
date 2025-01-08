import React from 'react'
import ReactDOM from 'react-dom/client'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import './App.css'
// import '../src/assets/css/App.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './assets/css/App.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
    {/* <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/rightcode/' : '/'}>
      <App />
    </BrowserRouter> */}

  </React.StrictMode>
)
