import RESTClient from "../config/client";

export const WALLET_FUND_ENDPOINT = "/wallet/wallet/fund";
export const WALLETS_ENDPOINT = "/wallet/wallets";
export const WALLET_TRANSFER_FUND_ENDPOINT = "/wallet/transfer/wallet";
export const BANK_TRANSFER_FUND_ENDPOINT = "/wallet/transfer/payout/bank";


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

export const createTransferRequest = async(transferParams, client=RESTClient) => {
    try{
        const response = await client.post(WALLET_TRANSFER_FUND_ENDPOINT, transferParams);
        return response.data;
    }catch(e){
        throw Error("Wallet transfer failed");
    }
}

export const createBankTransferRequest = async(transferParams, client=RESTClient) => {
    try{
        const response = await client.post(BANK_TRANSFER_FUND_ENDPOINT, transferParams);
        return response.data;
    }catch(e){
        throw Error("Bank transfer failed");
    }
}