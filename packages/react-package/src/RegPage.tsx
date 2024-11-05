import viteLogo from '/vite.png'
import './RegPage.css'

function RegPage() {
  return (
    <>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <div>
            <div>
                <input type="password" className="input-align" name="password" required></input>
            </div>
            <div>
                <input type="password" className="input-align" name="password" required></input>
            </div>
            <div>
                <input type="password" className="input-align" name="password" required></input>
            </div>
            <div>
                <input type="password" className="input-align" name="password" required></input>
            </div>
        </div>
        
        <div className="letter-color ">
            <h2>Let's complete your profile.</h2>
            <h5>It will help us to know more about you</h5>
        </div>
        
        <div className="card">
        <button className="btn-getStarted" >
          Next
        </button>
      </div>
    </>
  )
}

export default RegPage
