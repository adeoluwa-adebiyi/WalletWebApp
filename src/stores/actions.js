export const SET_LOGIN = "SET_LOGIN";

export const setLogin = (status) => {
    return {
        type: SET_LOGIN,
        payload: {
            loggedIn: status
        }
    }
}