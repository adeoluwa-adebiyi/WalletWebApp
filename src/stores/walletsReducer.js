import { SET_WALLETS, SET_WALLETS_AND_BALANCES } from "./actions";

export default  (state={wallets:[], balances:{}, defaultWallet:null, walletsAndBalancesFetched: false}, action) => {
    switch(action.type){

        case SET_WALLETS:{
            const { wallets } = action.payload;
            return {...state, wallets};
        }

        case SET_WALLETS_AND_BALANCES:{
            const { wallets, balances } = action.payload;
            return {...state, wallets, balances, walletsAndBalancesFetched: true};
        }

        default:
            return state;
    }
}