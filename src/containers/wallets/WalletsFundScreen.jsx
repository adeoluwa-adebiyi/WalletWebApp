import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { PageHeader } from "../../components/PageHeader";
import WalletFundRequestForm from "../../components/WalletFundRequestForm";
import { Container } from "../../components/Container";
import * as WalletApi from "../../apis/wallet";
import { usePaystackPayment } from 'react-paystack';
import config from "../../config";
import { getUserProfile } from "../../utils";
import { CashOutline } from "react-ionicons"
import { OrangeRedYellowGradient } from "../../components/BalanceCard";
import { useDispatch } from "react-redux";
import { fetchUserWalletsAction, setWalletFundDetails } from "../../stores/actions";


const WalletFundScreen = ({ formDisabled=false }) => {

    const [paymentConfig, setPaymentConfig] = useState({

    });

    const [paymentVisible, setPaymentVisible] = useState(false);

    const dispatch = useDispatch();

    const PaymentModal = (props) => {

        const { startPayment } = props;

        const initializePayment = usePaystackPayment(paymentConfig);

        const onSuccess = (reference) => {
            // Implementation for whatever you want to do with reference and after success call.
            setPaymentVisible(false);
            dispatch(setWalletFundDetails(null,null));
            setTimeout(()=>{
                dispatch(fetchUserWalletsAction());
            },5000)
        };

        // you can call this function anything
        const onClose = () => {
            // implementation for  whatever you want to do when the Paystack dialog closed.
            setPaymentVisible(false);
        }

        useEffect(() => {
            if (startPayment) {
                initializePayment(onSuccess, onClose);
            }
        });

        return (
            <div />
        )
    }




    const makePayment = (reference, email, amount) => {
        // you can call this function anything

        const paymentDetails = {
            reference,
            email,
            amount: amount * 100,
            publicKey: config.PAYSTACK_PUB_KEY,
        };
        setPaymentConfig(paymentDetails);
        setPaymentVisible(true);
    }


    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFundRequest = async (values) => {
        const email = getUserProfile().email;
        const { walletId, currency, amount } = values;
        try {
            setIsSubmitting(true);
            const response = await WalletApi.fundWallet(currency, amount, { email });
            if (response.data._id) {
                const reference = response.data._id;
                setIsSubmitting(false);
                makePayment(reference, email, amount);
            }
        } catch (e) {
            setIsSubmitting(false);
        }
    }

    return (
        <React.Fragment>
            {<PaymentModal startPayment={paymentVisible}/>}
            {/* <PageHeader title="Fund Wallet"/> */}
            {/* <Card title={"Create a Fund Request"} style={{ maxWidth: 400 }}> */}
            <div>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", marginBottom:16}}>
                <CashOutline height="120px" width="120px" color="#fff" style={{background: OrangeRedYellowGradient, padding:16, borderRadius:"100%"}}/>
                </div>
                <WalletFundRequestForm disabled={formDisabled} onFinish={handleFundRequest} isSubmitting={isSubmitting} />
            </div>
            {/* </Card> */}
        </React.Fragment>
    )
}

export default WalletFundScreen;