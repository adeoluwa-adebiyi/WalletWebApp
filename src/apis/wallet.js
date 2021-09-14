// {
//     "currency": "NGN",
//     "amount": 9000,
//     "cardDetails": {
//         "cardNo": "5531886652142950",
//         "cardUsername": "Gary Neville",
//         "cardCVV": "564",
//         "cardExp": "09/32",
//         "cardPIN": "3310",
//         "email": "akuybe@gmail.com"
//     }
// }

import RESTClient from "../config/client";

export const WALLET_FUND_ENDPOINT = "/wallet/fund";

export const fundWallet = async(currency, amount, cardDetails, client=RESTClient) => {
    try{
        const response = await client.post(WALLET_FUND_ENDPOINT, {currency, amount, cardDetails});
        return response.data;
    }catch(e){
        throw Error("Wallet fund request failed");
    }
}