import RESTClient from "../config/client";

export const WALLET_FINANCE_BALANCE_ENDPOINT = (walletId) => `/finance/balance/${walletId}`;

export const getWalletBalance = async(walletId, client=RESTClient) => {
    try{
        const response = await client.get(WALLET_FINANCE_BALANCE_ENDPOINT(walletId));
        return response.data;
    }catch(e){
        console.log(e);
        throw Error("Wallet fund request failed");
    }
}

export const getWalletBalances = async(walletIds, client=RESTClient) => {
    try{
        const response = await Promise.all(walletIds.map(walletId => getWalletBalance(walletId)));
        return response.map(res=>res.data);
    }catch(e){
        console.log(e);
        throw Error("Wallet fund request failed");
    }
}