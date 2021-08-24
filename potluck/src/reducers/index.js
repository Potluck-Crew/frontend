import { LOGIN } from '../actions/index'

export const initialState = {
    username:'',
    password:'',
    role:'',
    isLoggedIn: false,
    error: '',
    food_items: [],

}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
            };
        default: return state;
    }
}

export default reducer;



 