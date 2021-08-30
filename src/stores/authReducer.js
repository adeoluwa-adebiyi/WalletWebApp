import { SET_LOGIN } from "./actions";

const authReducer = (state = { loggedIn: false }, action) => {

    switch (action.type) {

        case SET_LOGIN:
            const { loggedIn } = action.payload;
            return {
                ...state, loggedIn
            }

        default:
            return state
    }
}

export default authReducer;