import React, { useState } from 'react';
import '../App.css';

import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link, useHistory} from "react-router-dom";
import {loginStart} from '../actions/index'
import { connect } from 'react-redux'
import axios from 'axios';


const Container = styled.div`
display:flex;
flex-direction: column;
background-color: white; 
width: 50vw;
align-items:center;
align-content: center;
border-radius: 50px;
text-align: center;
padding: 5%;
`

const LoginBtn = styled.button`
background-color: black;
color: white;
padding: 10px 40px 10px 40px;
border: none;
margin: 10% 0% 20% 0%;
text-align:center;
`

const LoginForm = styled.div`
`

const credentials = {
    username: '',
    password: '',
}

function Login() {
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
        console.log(login);
        axios.post('https://build-week4.herokuapp.com/api/auth/login', login)
        .then(res => {
            console.log(res)
            
        })
        .catch(error => console.log(error));
        push('/potlucks')
        console.log('You are logged in!')
    }

    return (
        <div className='login'>
        <Container>
            <div>
            <br />
         <h1>Plan the Perfect Potluck</h1>
         <p>Coordinate potluck dishes, supplies and party RSVPs with online sign up sheets for gatherings with family, friends and large groups.</p>
            </div>
{/* RIGHT BOX BEGINS -------------------- */}
            <LoginForm>
            <form onSubmit={handleSubmit}>
{/* USERNAME INPUT */}
            <label>Username:
                <input
                    type='text'
                    onChange={handleChange}
                    value={login.username}
                    name='username'
                />
            </label>
{/* PASSWORD INPUT */}
            <label>Password: &nbsp;
                <input
                    type='password'
                    onChange={handleChange}
                    value={login.password}
                    name='password'
                />
            </label>
{/* SUBMIT BUTTON */}
            <LoginBtn>Sign in</LoginBtn>
            </form>
            <p>
                Don't have an account? <Link to='/newaccount'>Sign Up.</Link>
            </p>

            </LoginForm>
{/* RIGHT BOX ENDS -------------------- */}

        </Container>
        </div>
    )
}

export default connect(null, {loginStart})(Login);
