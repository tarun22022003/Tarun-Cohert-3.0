
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  MyStore, ContextProvider } from "./Context/MyContext";

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)
