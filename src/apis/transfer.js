import RESTClient from "../config/client";

export const AUTHORIZE_TRANSFER_ENDPOINT = (trxId) => `/transfers/transfer/${trxId}`;

export const authorizeTransferRequest = async(trxId, client=RESTClient) => {
    try{
        const response = await client.get(AUTHORIZE_TRANSFER_ENDPOINT(trxId));
        return response.data;
    }catch(e){

    }
}