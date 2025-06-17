import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import Wrapper from './Routing/subpage/Wrapper.jsx'
import Form from './Routing/subpage/Form.jsx'
import Router from './Routing/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <Wrapper/> */}
    {/* <Form/> */}
    
    <Router/>
  </StrictMode>,
)
