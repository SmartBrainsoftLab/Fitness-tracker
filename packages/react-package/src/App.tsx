// import viteLogo from '/vite.png'
// import './App.css'
// import LogIn from './LogIn.tsx'
// function App() {
//   return (
//     <>
//       <img src={viteLogo} className="logo" alt="Vite logo" />
//       <h3 className="h3-size">Welcome To</h3>
//       <h2 className="h2-size">OUR FITNESS CARE</h2>
//       <div className="card">
//         <button className="btn-getStarted" onClick={LogIn}>
//           Get Started
//         </button>
        
//       </div>
//     </>
//   )
// }

// export default App


import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PATH } from './consts';

import './App.css'
import StartPage from './pages/startpage/StartPage.tsx'
import LogIn from './pages/signin/SignIn.tsx'
import LogReg from './pages/signup/SignUp.tsx'
import RegPage from './pages/regpage/RegPage.tsx'
function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.STARTPAGE} element={<StartPage />} />
          <Route path={PATH.SIGNIN} element={<LogIn />} />
          <Route path={PATH.SIGNUP} element={<LogReg />} />
          <Route path={PATH.REGPAGE} element={<RegPage />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>  
  )
}

export default App




