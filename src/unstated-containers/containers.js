import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import * as AuthApi from "../apis/auth";

const useAuth = () => {

    const [authState, setAuthState] = useState({
        token: null
    })

    const isLoggedIn = () => authState.token ? true : false;

    const login = async (username, password) => {
        try {
            setAuthState({ ...authState, token: "some-token" });
            // const data = await AuthApi.login(username, password);
            // if (data?.token) {
            //     setAuthState({ ...authState, token: data?.token });
            // }
        } catch (e) {
            throw e;
        }
    }

    const logout = () => {
        setAuthState({ ...authState, token: null });
    }

    return {
        login,
        logout,
        authState,
        setAuthState,
        isLoggedIn
    };
}

const authContainer = createContainer(useAuth);

export default {
    authContainer
}