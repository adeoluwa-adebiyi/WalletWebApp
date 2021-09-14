import RESTClient from "../config/client";
import { USER_INVALID_LOGIN_ERROR, USER_LOGIN_ERROR_GENERIC } from "../errors/auth";

// export const LOGIN_ENDPOINT = "/wallet/login";
export const LOGIN_ENDPOINT = "/login";


export const login = async(username, password, client=RESTClient) => {
    try{
        const response = await client.post(LOGIN_ENDPOINT, {email: username, password});
        return response.data;
    }catch(e){
        if(e.statusCode == 401){
            throw Error(USER_INVALID_LOGIN_ERROR);
        }
        throw Error(USER_LOGIN_ERROR_GENERIC);
    }
}