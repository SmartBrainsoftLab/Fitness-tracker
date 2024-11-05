import './LogReg.css'
function LogReg() {
  return (
    <>
        <div className="LogReg-container">
            <form className="LogReg-form">
                <h2>LogReg</h2>
                <div className="form-group">
                    <label >Username</label>
                    <input ></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="password" name="password" required></input>
                </div>
                <div className="form-group">
                    <label>Confirm</label>
                    <input type="password" className="password" name="password" required></input>
                </div>
                <div className="button-between">
                    <button type="submit">LogReg</button>
                    <button type="submit">LogIn</button>
                </div>
            </form>
        </div>
    </>

  )
}

export default LogReg
