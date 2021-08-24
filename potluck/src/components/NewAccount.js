import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

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
    userName: '',
    password: '',
    rePassword: ''
}

function NewAccount() {

    const [ newLogin, setNewLogin ] = useState(initialValues);

    const onChange = (event) => {
        setNewLogin({
            ...newLogin,
            [event.target.name]: event.target.value
        })
        console.log(newLogin);
    }
    

    return (
        <div className = 'newAccount'>
            <Wrap>
                    <h2>Sign up form</h2>
                <form>
                    <label>Username:
                        <input  
                            type = 'text'
                            name = 'username'
                            placeholder = 'Username'
                            onChange = { onChange }
                        />
                    </label>
                    <label>Password:
                        <input  
                            type = 'text'
                            name = 'password'
                            placeholder = 'Password'
                            onChange = { onChange }
                        />
                    </label>
                    <label>Re-enter Password:
                        <input  
                            type = 'text'
                            name = 're-enter-password'
                            placeholder = 'Re-enter Password'
                            onChange = { onChange }
                        />
                    </label>
                    <p>Role:</p>
                    <select>
                    <label>Organizer 
                        <input type = 'radio' />
                    </label> 
                    <label>Guest
                        <input type = 'radio' />
                    </label> 
                    </select>
                </form>
             </Wrap>
        </div>
    )
}

export default NewAccount;
