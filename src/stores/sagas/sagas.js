import { call, put, putResolve,takeLatest } from "redux-saga/effects";
import { getWalletBalances } from "../../apis/finance";
import { getWallets } from "../../apis/wallet";
import { FETCH_USER_WALLETS, setWallets, setWalletsAndBalances, setDefaultWallet } from "../actions";

function* fetchUserWallets(action){
    try{
        const response = yield call(getWallets);
        const wallets = response.data;
        const walletIds = wallets.map(wallet => wallet.id);
        const balances = (yield call(getWalletBalances, [walletIds]));
        console.log({balances});
        yield putResolve(setDefaultWallet(walletIds[0]));
        yield putResolve(setWalletsAndBalances(wallets, balances));
    }catch(e){
        console.log(e);
    }
}

export default function* sagas(){
    yield(takeLatest(FETCH_USER_WALLETS, fetchUserWallets));
}