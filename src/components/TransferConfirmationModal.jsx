import Modal from "../components/Modal";
import Button from "./Button";
import { BANK_TRANSFER, WALLET_TRANSFER } from "../containers/send";
import WalletTransferRequestForm from "./WalletTransferRequestForm";
import BankTransferRequestForm from "./BankTransferRequestForm";

const TransferConfirmationModal = ({ visible, closeModal, transferData, type, authorize=()=>{} }) => {
    console.log(transferData);
    return (
    <Modal title="Confirm Transfer" visible={visible} onCancel={closeModal} footer={null}>
        <div style={{ padding: 16, paddingTop: 20 }}>
            {type === WALLET_TRANSFER && <WalletTransferRequestForm 
                defaultValues={{...transferData}} 
                disabled={true} />}
            {type === BANK_TRANSFER && <BankTransferRequestForm 
                defaultValues={transferData} 
                disabled={true} />}
            <Button style={{paddingTop: 16, color: "#fff"}} onClick={authorize}>Confirm</Button>
        </div>
    </Modal>);
}

export default TransferConfirmationModal;