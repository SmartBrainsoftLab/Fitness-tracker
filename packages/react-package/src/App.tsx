import viteLogo from '/vite.png'
import './App.css'
import LogIn from './LogIn.tsx'
function App() {
  return (
    <>
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <h3 className="h3-size">Welcome To</h3>
      <h2 className="h2-size">OUR FITNESS CARE</h2>
      <div className="card">
        <button className="btn-getStarted" onClick={LogIn}>
          Get Started
        </button>
        
      </div>
    </>
  )
}

export default App
