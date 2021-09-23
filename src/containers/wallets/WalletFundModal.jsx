import Modal from "../../components/Modal";
import WalletFundScreen from "./WalletsFundScreen";

const WalletFundModal = ({visible, closeModal}) => {
    return (
        <Modal title="Fund Wallet" visible={visible} onCancel={closeModal} footer={null}>
            <div style={{padding:16, paddingTop:20}}>
            <WalletFundScreen/>
            </div>
        </Modal>
    )
}

export default WalletFundModal;