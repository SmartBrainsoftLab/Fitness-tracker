import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PATH } from './consts';

import './index.css'
import App from './App.tsx'
import LogIn from './LogIn.tsx'
import LogReg from './LogReg.tsx'
import RegPage from './RegPage.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={PATH.START} element={<App />} />
        <Route path={PATH.LOGIN} element={<LogIn />} />
        <Route path={PATH.LOGREG} element={<LogReg />} />
        <Route path={PATH.REGPAGE} element={<RegPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>  
)


