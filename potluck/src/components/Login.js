import React from 'react';
import { Route, Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <h2>User login form</h2>
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
            Don't have an account? <Link to = '/'>Sign Up</Link>.
        </div>
    )
}

export default Login
