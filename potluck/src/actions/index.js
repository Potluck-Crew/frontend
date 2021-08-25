import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGIN_USER = 'LOGIN_USER';

export const loginStart = cred => dispatch => {
    // const cred = {
    //     username: props.username,
    //     password: props.password,
    //     role: props.role,
    // };

    dispatch({ type: LOGIN });
    return axios
    .post('https://build-week4.herokuapp.com/api/auth/login', cred)
    .then(res => {
        console.log(res)
        dispatch({ type: LOGIN_USER, payload: res.data })
    })
    .catch(error => console.log('FIX THIS!', error))
}

