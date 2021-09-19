import { Col, Row, Button, Spin, Skeleton, Card } from "antd"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import BalanceCard from "./BalanceCard";

const Wallet = ({ walletId, currency, ...otherProps }) => {


    const [walletData, setWalletData] = useState({
        fetched: false,
        balance: 0.00,
        currencySymbol: "₦"
    });

    useEffect(() => {
        setTimeout(() => {
            setWalletData({
                fetched: true,
                balance: 637000.50,
                currencySymbol: "₦"
            })
        }, 5000);
    }, [])

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
            {!walletData.fetched && <Skeleton/>}
            {walletData.fetched && <Col span={24}>
                <Row style={{marginBottom:10}}>
                    <Col span={4}>
                        {/* <h3 style={{color:"red", fontFamily:"Times New Roman", fontWeight:"bold"}}>{currency}</h3> */}
                    </Col>
                    <Col span={20}>
                        <Row align="end">
                            <Link to={`/dashboard/wallets/fund/${walletId}`}>
                                <Button>Fund</Button>
                            </Link>
                        </Row>
                    </Col>
                </Row>

                <BalanceCard cardStyles={{background:"transparent", border: "none"}} balance={{balance: walletData.balance, currencySymbol: walletData.currencySymbol}}/>
            </Col>}
        </Row>
        </Card>
    )
}

export default Wallet;