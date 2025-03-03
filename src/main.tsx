import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './app/store'
import { Provider } from 'react-redux'
// import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
