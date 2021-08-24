import axios from 'axios';

export const LOGIN = 'LOGIN';
export const loginStart = credentials => dispatch => {
    dispatch({ type: LOGIN });
    return axios
    .post('https://build-week4.herokuapp.com/api/auth/login', credentials)
    .then(res => {
        console.log(res)
    })
    .catch(error => console.log('FIX THIS!', error))
}

