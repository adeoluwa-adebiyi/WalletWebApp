import { combineReducers, createStore } from "redux";
import auth from "./authReducer";
import wallets from "./walletsReducer";

const reducers = combineReducers({
    auth,
    wallets
});

export default reducers;