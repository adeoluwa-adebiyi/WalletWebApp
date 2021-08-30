import Axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const client = Axios.create({
    baseURL: process.env.APP_BASE_URL,
    withCredentials: true
});

export default client;