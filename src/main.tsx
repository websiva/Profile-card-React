import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { UserCard } from './UserCard'
//import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
    <UserCard/>
  </StrictMode>,
)
