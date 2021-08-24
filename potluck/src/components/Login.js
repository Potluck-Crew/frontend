import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
    return (
        <div className = 'login'>
            <div className = 'container'>
               <h2>Login</h2>
                <form>
                    <label>Username:
                        <input  
                            type = 'text'
                            name = 'username'
                            placeholder = 'Username'
                        />
                    </label>
                    <label>Password:
                        <input  
                            type = 'text'
                            name = 'password'
                            placeholder = 'Password'
                        />
                    </label>
                </form>
                <p>Don't have an account? <Link to = '/new' className = 'signup'>Sign Up</Link>.</p>
            </div>
        </div>
    )
}

export default Login
