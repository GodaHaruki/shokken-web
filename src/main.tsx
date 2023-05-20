import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UserDataProvider } from './contexts/UserDataCtx.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserDataProvider>
    <App />
    </UserDataProvider>
  </React.StrictMode>,
)
