import { LOGIN, LOGIN_USER } from '../actions/index'

export const initialState = {
    username:'',
    password:'',
    role:'',
    isLoggedIn: false,
    error: '',
    token: null,
    food_items: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            // localStorage.setItem("token", token)
            return {
                ...state,  
            };
        case LOGIN_USER:
            return {
                isLoggedIn: true,
                username: action.payload.user.username,
                token: action.payload.token,
                role: action.payload.user.role,
            };
        default: return state;
    }
}

export default reducer;



 