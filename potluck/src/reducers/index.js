import { LOGIN, LOGIN_USER } from '../actions/index'

export const initialState = {
    username:'',
    password:'',
    role:'',
    isLoggedIn: false,
    error: '',
    token: null,
    food_items: [],
    user_id: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            // localStorage.setItem("token", token)
            return {
                ...state,  
            };
        case LOGIN_USER:
            localStorage.setItem('token', action.payload.token);
            return {
                isLoggedIn: true,
                username: action.payload.user.username,
                token: action.payload.token,
                role: action.payload.user.role,
                user_id: action.payload.user.user_id,

            };
        default: return state;
    }
}

export default reducer;



 