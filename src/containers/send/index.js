import { Collapse } from "antd";
import { ArrowForwardOutline, CaretForwardSharp } from "react-ionicons";
import { CaretForwardOutline } from "react-ionicons";
import BankTransferRequestForm from "../../components/BankTransferRequestForm";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { Container } from "../../components/Container";
import { PageHeader } from "../../components/PageHeader";
import WalletFundRequestForm from "../../components/WalletFundRequestForm";
import WalletTransferRequestForm from "../../components/WalletTransferRequestForm";
import withAppLayout from "../AppLayout";
import * as WalletApi from "../../apis/wallet";
import * as TransferApi from "../../apis/transfer";
import { delayComputation } from "../../utils";
import { useState } from "react";
import TransferConfirmationModal from "../../components/TransferConfirmationModal";
import { toast } from "react-toastify";
import { fetchUserWalletsAction } from "../../stores/actions";
import { useDispatch } from "react-redux";


const { Panel } = Collapse;

export const WALLET_TRANSFER = "wallet-transfer";
export const BANK_TRANSFER = "bank-transfer";

const Send = (props) => {
    const forwardIcon = <ArrowForwardOutline
        // color={'#00000'}
        height="20px"
        width="20px"
    />

    const dispatch = useDispatch();

    const handleWalletTransferRequest = async(values) => {
        try{
            const response = await toast.promise(WalletApi.createTransferRequest(values),{
                pending: "Procesing Transfer request", 
                success:"Transfer request created successfully", 
                error:"Failed to initiate Transfer request"}
            );
            if(response.transferRequest){
                showConfirmTransferDialogue(response.transferRequest);
            }
        }catch(e){
            // notifyTransferError(e.message);
        }
    }

    const [state, setState] = useState({
        trxConfirmVisible: false,
        trxData: null,
        trxType:null
    });

    const showConfirmTransferDialogue = (data) => {
        let type;
        if(data.hasOwnProperty("sourceWalletId") && data.hasOwnProperty("destinationWalletId")){
            type = WALLET_TRANSFER;
        }
        if(data.hasOwnProperty("bankId") && data.hasOwnProperty("destinationAccount")){
            type = BANK_TRANSFER;
        }
        setState({...state, trxData: data, trxType:type, trxConfirmVisible: true});
    }

    const closeConfirmTransferDialogue = () => {
        setState({...state, trxData: null, type: null, trxConfirmVisible: false});
    }

    const showTransactionPendingMessage = () => {
        
    }

    const authorizeTransaction = async(trxId) => {
        try{
            const response = await toast.promise(TransferApi.authorizeTransferRequest(trxId), {
                error:"Failed to authorise Transfer",
                pending: "Authorising Transfer",
                success:"Done. You will be notified when transaction is completed."
            });
            // if(response){
                closeConfirmTransferDialogue();
                delayComputation(()=>dispatch(fetchUserWalletsAction()));
            // }
        }catch(e){
            closeConfirmTransferDialogue();
        }
    }

    const handleBankTransferRequest = async(values) => {
        try{
            const response = await toast.promise(WalletApi.createBankTransferRequest(values),{
                pending: "Procesing Transfer request", 
                success:"Transfer request created successfully", 
                error:"Failed to initiate Transfer request"}
            );
            if(response.data){
                showConfirmTransferDialogue(response.data);
            }
        }catch(e){
            // notifyTransferError(e.message);
        }
    }

    return (
        <Container>

            {state.trxData && <TransferConfirmationModal 
                authorize={()=>authorizeTransaction(state.trxData?.requestId)} 
                transferData={state.trxData} 
                type={state.trxType}
                closeModal={closeConfirmTransferDialogue}
                visible={state.trxConfirmVisible}/>}

            <PageHeader title="Send" />
            <div style={{ margin: "0 auto"}}>
                <Card title="Send Via" style={{ maxWidth: 500, width: 500, padding:16  }}>
                    <Collapse accordion
                        defaultActiveKey={['1']}
                    >
                        <Panel header="Wallet Transfer" key="1" extra={forwardIcon}>
                            <WalletTransferRequestForm onFinish={handleWalletTransferRequest}/>
                        </Panel>

                        <Panel header="Bank Transfer" key="2" extra={forwardIcon}>
                            <BankTransferRequestForm onFinish={handleBankTransferRequest}/>
                        </Panel>

                    </Collapse>
                </Card>
            </div>
        </Container>)
}

export default Send;