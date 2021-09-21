export const SET_LOGIN = "SET_LOGIN";
export const FETCH_USER_WALLETS = "FETCH_USER_WALLETS";
export const SET_WALLETS_AND_BALANCES = "SET_WALLETS_AND_BALANCES";
export const SET_WALLETS = "SET_WALLETS";

export const setLogin = (status) => {
    return {
        type: SET_LOGIN,
        payload: {
            loggedIn: status
        }
    }
}

export const fetchUserWalletsAction = () => {
    return {
        type: FETCH_USER_WALLETS
    }
}

export const setWallets = (wallets) => {
    return {
        type: SET_WALLETS,
        payload: {wallets}
    }
}

export const setWalletsAndBalances = (wallets, balances) => {
    return {
        type: SET_WALLETS_AND_BALANCES,
        payload: {wallets, balances}
    }
}