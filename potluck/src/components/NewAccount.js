import React from 'react'

function NewAccount() {
    return (
        <div>
            <h2>Sign up form</h2>
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
            Role: Organizer or Guest
        </div>
    )
}

export default NewAccount
