import './LogIn.css'

function LogIn() {
  return (
    <>
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label >Username</label>
                    <input ></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="password" name="password" required></input>
                </div>
                <div className="button-between">
                    <button type="submit">Login</button>
                    <button type="submit">LogReg</button>
                </div>
                
            </form>
        </div>
    </>

  )
}

export default LogIn
