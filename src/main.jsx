import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Web3ModalProvider } from './context/Web3Modal'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Web3ModalProvider>
      <App />
    </Web3ModalProvider>
  </StrictMode>,
)
