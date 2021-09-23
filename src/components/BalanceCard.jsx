import { Card, Col, Row } from "antd";
import { useSelector } from "react-redux";

const balanceTitleStyle = {
    fontWeight: "bolder",
    color: "#ffffff",
    fontSize: "1.2em"
}

export const OrangeRedYellowGradient = "linear-gradient(127deg, rgba(253,115,156,1) 30%, rgba(252,146,82,1) 54%)";

const cardStyle = { background: OrangeRedYellowGradient, padding: 0, borderRadius: "10px" };

const balanceStyle = { fontSize: "1.8em", fontWeight: "bolder", color: "#ffffff", padding: 0, margin: 0, textAlign:"end" };

const balanceSymbolStyle = { fontSize: "1.8em", fontWeight: "bolder", color:"#ffffff" };

const BalanceCard = ({
    title="Current Balance", 
    balance={ currency: "NGN", currencySymbol: "₦", balance: 15683660.00 },
    balanceStyles,
    balanceSymbolStyles,
    cardStyles
}) => {

    return (
        <Card style={{...cardStyle, ...cardStyles}}>
            <Row>
                <Col span={24}>
                    <Row>
                        <span style={balanceTitleStyle}>{title}</span>
                    </Row>
                    <Row>
                        <Col span={4}>
                            <span style={{...balanceSymbolStyle, ...balanceSymbolStyles}}>{balance.currencySymbol}</span>
                        </Col>
                        <Col span={20}>
                            <p style={{...balanceStyle, ...balanceStyles}}>{balance.balance.toLocaleString()}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    );
}

export default BalanceCard;