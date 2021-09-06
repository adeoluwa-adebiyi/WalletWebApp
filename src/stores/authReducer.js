import { SET_LOGIN } from "./actions";
import { AUTH_TOKEN_KEY } from "../config/data";

const authReducer = (state = { loggedIn: false }, action) => {

    switch (action.type) {

        case SET_LOGIN:
            const { loggedIn } = action.payload;
            return {
                ...state, loggedIn
            }

        default:
            return {...state, loggedIn: sessionStorage.getItem(AUTH_TOKEN_KEY)? true : false} 
    }
}

export default authReducer;