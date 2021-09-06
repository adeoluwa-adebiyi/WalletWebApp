import { Col, Row, Button, Spin, Skeleton, Card } from "antd"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Wallet = ({ walletId, currency, ...otherProps }) => {


    const [walletData, setWalletData] = useState({
        fetched: false,
        balance: 0.00
    });

    useEffect(() => {
        setTimeout(() => {
            setWalletData({
                fetched: true,
                balance: 637000.50
            })
        }, 5000);
    }, [])

    return (
        <Card title={null} style={{borderRadius: 15}}>
        <Row style={{ maxHeight: 200, padding:20, boxSizing:"border-box" }} gutter={0}>
            {!walletData.fetched && <Skeleton />}
            {walletData.fetched && <Col span={24}>
                <Row>
                    <Col span={4}>
                        <h3 style={{color:"red", fontFamily:"Times New Roman", fontWeight:"bold"}}>{currency}</h3>
                    </Col>
                    <Col span={20}>
                        <Row align="end">
                            <Link to={`/dashboard/wallets/fund/${walletId}`}>
                                <Button>Fund</Button>
                            </Link>
                        </Row>
                    </Col>
                </Row>

                <Row align="start">
                    <h2 style={{color:"#666", fontFamily:"Times New Roman", fontWeight:"bold"}}>₦&nbsp;{walletData.balance.toFixed(2)}</h2>
                </Row>
            </Col>}
        </Row>
        </Card>
    )
}

export default Wallet;