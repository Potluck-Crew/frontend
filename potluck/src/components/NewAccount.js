import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

import styled from 'styled-components';
import './newAccount.css';

const Wrap = styled.div`
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

const initialValues = {
    username: '',
    password: '',
    role: ''
}

function NewAccount() {

    const [ newLogin, setNewLogin ] = useState(initialValues);
    const history = useHistory();
    
    const onChange = (event) => {
        setNewLogin({
            ...newLogin,
            [event.target.name]: event.target.value
        })
        //console.log(newLogin);
    }

    const handleSignUp = e => {
        e.preventDefault();
        console.log(newLogin);
        axios.post('https://build-week4.herokuapp.com/api/auth/register', newLogin)
        .then(res => {
            console.log('Registration Success!', res);
            history.push('/');
        })
        .catch(err => {
            console.log(err);
        })
    }
    

    return (
        <div className = 'newAccount'>
            <Wrap>
                    <h2>Sign up form</h2>
                <form onSubmit={ handleSignUp }>
                    <label>Username:
                        <input  
                            id='username'
                            type = 'text'
                            name = 'username'
                            placeholder = 'username'
                            //value={newLogin.username}
                            onChange = { onChange }
                        />
                    </label>
                    <label>Password:
                        <input  
                            id='password'
                            type = 'text'
                            name = 'password'
                            placeholder = 'password'
                            value={newLogin.password}
                            onChange = { onChange }
                        />
                    </label>
                    <label>Role:
                        <select id='role' name='role' value={newLogin.role} onChange= { onChange }>
                            <option value='default'>select a role</option>
                            <option value='guest'>guest</option>
                            <option value='organizer'>organizer</option>
                        </select>
                    </label>
                    <button id='submit'>Sign Up</button>
                </form>
             </Wrap>
        </div>
    )
}

export default NewAccount;
