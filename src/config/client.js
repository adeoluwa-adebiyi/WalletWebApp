import Axios from "axios";
import dotenv from "dotenv";
import { AUTH_TOKEN_KEY } from "./data";

dotenv.config();

const client = Axios.create({
    baseURL: process.env.APP_BASE_URL,
    // headers: {
    //     Authorization: `Bearer ${sessionStorage.getItem(AUTH_TOKEN_KEY) ?? ""}`
    // }
    // withCredentials: true
});

client.interceptors.request.use((val) => ({
    ...val, headers: {
        ...val.headers,
        Authorization: `Bearer ${sessionStorage.getItem(AUTH_TOKEN_KEY) ?? ""}`,
    }
}), (err) => {
});

export default client;