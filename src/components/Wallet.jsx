import { Col, Row, Spin, Skeleton, Card } from "antd";
import Button from "../components/Button";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useWallets } from "../hooks";
import BalanceCard from "./BalanceCard";

const Wallet = ({ walletData, fetched, ...otherProps }) => {

    const { fundWallet } = useWallets();

    const openWalletFundModal = () => {
        fundWallet(walletData.id);
    }

    return (
        <Card title={null} style={{
            borderRadius: 15, 
            background: "linear-gradient(127deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
            border: "none",
            boxShadow:"1px 3px 10px #ccc"
        }}>
        <Row style={{ maxHeight: 200, 
            // padding:20, 
            boxSizing:"border-box" }} gutter={0}>
            {!fetched && <Skeleton/>}
            {fetched && <Col span={24}>
                <Row style={{marginBottom:10}}>
                    <Col span={4}>
                        {/* <h3 style={{color:"red", fontFamily:"Times New Roman", fontWeight:"bold"}}>{currency}</h3> */}
                    </Col>
                    <Col span={20}>
                        <Row align="end">
                            {/* <Link to={`/dashboard/wallets/fund/${walletData.id}`}> */}
                                <div width="100px"><Button style={{color:"#fff"}} onClick={openWalletFundModal}>Fund</Button></div>
                            {/* </Link> */}
                        </Row>
                    </Col>
                </Row>

                <BalanceCard cardStyles={{background:"transparent", border: "none"}} balance={walletData.balance}/>
            </Col>}
        </Row>
        </Card>
    )
}

export default Wallet;