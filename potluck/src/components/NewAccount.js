import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './newAccount.css';

function NewAccount() {
    //Temp state for toggle
    const [ checked, setChecked ] = useState(false);

    const onClick = () => {
        setChecked( !checked );
    }

    return (
        <div className = 'newAccount'>
            <div className = 'wrap'>
                    <h2>Sign up form</h2>
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
                    <label>Re-enter Password:
                        <input  
                            type = 'text'
                            name = 're-enter-password'
                            placeholder = 'Re-enter Password'
                        />
                    </label>
                    <p>Role: Organizer 
                        {/* <Switch
                            onChange = { onClick } 
                            checked = { checked }
                            color = 'red'
                        /> */}
                    Guest</p>
                </form>
             </div>
        </div>
    )
}

export default NewAccount;
