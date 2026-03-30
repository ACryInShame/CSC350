import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "C:/Users/redph/Documents/_Docs/WilmU/Innovative Web Development/Assignments/CSC350/Week 4 Assignment - Pet Search/node_modules/bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
