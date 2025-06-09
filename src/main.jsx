import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './index.css';
import './App.css';
import './styles/Home.css';
import './styles/Gallery.css';
import './styles/Projects.css';
import './styles/Contact.css';
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
