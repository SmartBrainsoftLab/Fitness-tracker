import viteLogo from '/vite.png'
import './StartPage.css'
import LogIn from '../signin/SignIn.tsx'
function StartPage() {
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

export default StartPage
