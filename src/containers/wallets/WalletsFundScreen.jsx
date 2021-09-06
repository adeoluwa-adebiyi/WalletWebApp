import React, {useEffect, useState} from "react";
import { Card, PageHeader } from "antd";
import WalletFundRequestForm from "../../components/WalletFundRequestForm";
import { Container } from "../../components/Container";
import * as WalletApi from "../../apis/wallet";
import { usePaystackPayment } from 'react-paystack';
import config from "../../config";


const WalletFundScreen = (props) => {

    const [paymentConfig, setPaymentConfig] = useState({

    });

    const [paymentVisible, setPaymentVisible] = useState(false);

    const PaymentModal = (props) => {

        const initializePayment = usePaystackPayment(paymentConfig);

        const onSuccess = (reference) => {
            // Implementation for whatever you want to do with reference and after success call.
            console.log("Payment Successful");
            console.log(reference);
        };

        // you can call this function anything
        const onClose = () => {
            // implementation for  whatever you want to do when the Paystack dialog closed.
            console.log('closed');
            setPaymentVisible(false);
        }

        useEffect(()=>{
            initializePayment(onSuccess, onClose);
        },[]);

        return (
            <>
            </>
        )
    }


    
  
    const makePayment = (reference, email, amount) => {
        // you can call this function anything

        const paymentDetails = {
            reference,
            email,
            amount,
            publicKey: config.PAYSTACK_PUB_KEY,
        };
        setPaymentConfig(paymentDetails);
        setPaymentVisible(true);
    }


    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFundRequest = async(values) => {
        const { walletId, currency, amount } = values;
        try{
            setIsSubmitting(true);
            const response = await WalletApi.fundWallet(currency, amount);
            if(response.data._id){
                const reference = response.data._id;
                setIsSubmitting(false);
                makePayment(reference,"akuybe@gmail.com",amount);
            }
        }catch(e){
            setIsSubmitting(false);
            console.log(e);
        }
    }

    return (
        <Container>
            {paymentVisible && <PaymentModal/>}
            <PageHeader title="Fund Wallet" style={{ paddingLeft: 0 }} />
            <Card title={"Create a Fund Request"} style={{ maxWidth: 400 }}>
                <WalletFundRequestForm onFinish={handleFundRequest} isSubmitting={isSubmitting} />
            </Card>
        </Container>
    )
}

export default WalletFundScreen;