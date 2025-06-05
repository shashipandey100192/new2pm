import React from 'react'
import { Link } from 'react-router-dom'

function Registorpage() {
    return (
        <div className='mylogin'>
            <div class="register-container">
                <form class="register-form">
                    <h2>Create Account</h2>
                    <div class="input-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" required />
                    </div>
                    <div class="input-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                    <div class="input-group">
                        <label for="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" required />
                    </div>
                    <button type="submit">Register</button>
                    <p class="login-link">Already have an account? <Link to="/">Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Registorpage