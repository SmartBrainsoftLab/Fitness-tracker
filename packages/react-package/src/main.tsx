// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { PATH } from './consts';

// import './index.css'
// import App from './App.tsx'
// import LogIn from './LogIn.tsx'
// import LogReg from './LogReg.tsx'
// import RegPage from './RegPage.tsx'
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path={PATH.START} element={<App />} />
//         <Route path={PATH.SIGNIN} element={<LogIn />} />
//         <Route path={PATH.SIGNUP} element={<LogReg />} />
//         <Route path={PATH.REGPAGE} element={<RegPage />} />
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>  
// )

console.log('index.ts');
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



