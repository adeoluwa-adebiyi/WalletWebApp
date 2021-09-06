import React, { useState } from "react";
import { Row, Col, Layout } from "antd";
import { Link } from "react-router-dom";
import Wallet from "../../components/Wallet";
import { Container } from "../../components/Container";
import { PageHeader } from "../../components/PageHeader";

const WalletsScreen = (props) => {

    const [walletsData, setWalletsData] = useState([
        { walletId: "873h3ihuh", currency: "NGN" },
        { walletId: "873h3ihuh", currency: "NGN" },

        { walletId: "873h3ihuh", currency: "NGN" },

        { walletId: "873h3ihuh", currency: "NGN" },

        { walletId: "873h3ihuh", currency: "NGN" },
        { walletId: "873h3ihuh", currency: "NGN" },
        { walletId: "873h3ihuh", currency: "NGN" },
        { walletId: "873h3ihuh", currency: "NGN" },

    ])

    return (
        <Container>
            <PageHeader title="Wallets"/>
            <Row gutter={10}>
            {walletsData.map(data =>
                <Col md={8} xs={24} style={{marginTop:10}}>
                    <Wallet {...data} />
                </Col>)}
            </Row>
        </Container>
    )
}

export default WalletsScreen;