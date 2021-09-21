import RESTClient from "../config/client";

export const WALLET_FUND_ENDPOINT = "/wallet/wallet/fund";
export const WALLETS_ENDPOINT = "/wallet/wallets";


export const fundWallet = async(currency, amount, cardDetails, client=RESTClient) => {
    try{
        const response = await client.post(WALLET_FUND_ENDPOINT, {currency, amount, cardDetails});
        return response.data;
    }catch(e){
        throw Error("Wallet fund request failed");
    }
}

export const getWallets = async(client=RESTClient) => {
    try{
        const response = await client.get(WALLETS_ENDPOINT);
        return response.data;
    }catch(e){
        console.log(e);
        throw Error("Failed to retrieve wallets information");
    }
}