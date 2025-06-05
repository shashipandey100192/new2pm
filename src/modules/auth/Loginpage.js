import React from 'react'
import { Link } from 'react-router-dom'

function Loginpage() {
  return (
    <div className='mylogin'>
    <div className="login-container">
    <form className="login-form">
      <h2>Login</h2>
      <div className="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" required />
      </div>
      <div className="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" required />
      </div>
      <button type="submit">Login</button>
      <p className="signup-link">Don't have an account? <Link to="registor">Sign up</Link></p>
    </form>
  </div>
  </div>
  )
}

export default Loginpage