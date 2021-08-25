import React, { useState } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link, useHistory} from "react-router-dom";
import {loginStart} from '../actions/index'
import { connect } from 'react-redux'
import axios from 'axios';

const credentials = {
    username: '',
    password: '' }

function Login(props) {
    const [login, setLogin] = useState(credentials);
    const { push } = useHistory();

    const handleChange = (e) => {
        console.log(e.target.value);
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
          });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.loginStart(login)
        // console.log(login);
        // axios.post('https://build-week4.herokuapp.com/api/auth/login', login)
        // .then(res => {
        //     console.log(res)
            
        // })
        // .catch(error => console.log(error));
        push('/potlucks')
        console.log('You are logged in!')
    }

    return (
        <div className='general_wrapper'>
                <h1>Plan the Perfect Potluck</h1>
                <p>Coordinate potluck dishes, supplies and party RSVPs with online sign up sheets for gatherings with family, friends and large groups.</p>
            <div className='login'>
            <form className='general_form' onSubmit={handleSubmit}>
                <p>Username: Ashley, Password: Password</p>
                {/* USERNAME INPUT */} <input 
                    type='text'
                    onChange={handleChange}
                    value={login.username}
                    name='username'
                    placeholder='username'
                />
                
                {/* PASSWORD INPUT */} <input 
                    type='password'
                    onChange={handleChange}
                    value={login.password}
                    name='password'
                    placeholder='password'
                /> 
                <button type='submit' className='signup_button'>Sign in</button> 
                {/* SUBMIT BUTTON */}
            </form>
            <p>Don't have an account? <Link to='/newaccount'>Sign Up.</Link></p>
            </div>
        </div>
    )
}

export default connect(null, { loginStart })(Login);
