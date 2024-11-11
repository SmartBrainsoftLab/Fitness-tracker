// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PATH } from './consts';

// import './App.css'
import StartPage from './pages/startpage/StartPage.tsx'
import SignIn from './pages/signin/SignIn.tsx'
import SignUp from './pages/signup/SignUp.tsx'
import RegPage from './pages/regpage/RegPage.tsx'
function App() {
  return (
    // <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.STARTPAGE} element={<StartPage />} />
          <Route path={PATH.SIGNIN} element={<SignIn />} />
          <Route path={PATH.SIGNUP} element={<SignUp />} />
          <Route path={PATH.REGPAGE} element={<RegPage />} />
        </Routes>
      </BrowserRouter>
    // </StrictMode>  
  )
}

export default App

// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { PATH } from "./constant";
// import { StartPage, SIGNIN, SIGNUP, RegPage,} from "pages";
// import { PrivateRoute } from "components";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/ReactToastify.min.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//           <Route path={PATH.STARTPAGE} element={<StartPage />} />
//           <Route path={PATH.SIGNIN} element={<SIGNIN />} />
//           <Route path={PATH.SIGNUP} element={<SIGNUP />} />
//           <Route path={PATH.REGPAGE} element={<RegPage />} />
//       </Routes>
//       <ToastContainer autoClose={1500} position="bottom-right" />
//     </BrowserRouter>
//   );
// }

// export default App;



