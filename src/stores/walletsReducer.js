import { SET_DEFAULT_WALLET, SET_WALLETS, SET_WALLETS_AND_BALANCES } from "./actions";

export default  (state={wallets:[], balances:{}, defaultWalletId:null, walletsAndBalancesFetched: false}, action) => {
    switch(action.type){

        case SET_WALLETS:{
            const { wallets } = action.payload;
            return {...state, wallets};
        }

        case SET_WALLETS_AND_BALANCES:{
            const { wallets, balances } = action.payload;
            return {...state, wallets, balances, walletsAndBalancesFetched: true};
        }

        case SET_DEFAULT_WALLET:{
            const { walletId } = action.payload;
            return {...state, defaultWalletId: walletId};
        }

        default:
            return state;
    }
}