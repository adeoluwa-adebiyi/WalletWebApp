import React, { useEffect, useState } from "react";
import { Row, Col, Layout } from "antd";
import { Link } from "react-router-dom";
import Wallet from "../../components/Wallet";
import { Container } from "../../components/Container";
import { PageHeader } from "../../components/PageHeader";
import { useWallets } from "../../hooks";

const WalletsScreen = (props) => {

    const { walletData, fetched } = useWallets();

    return (
        <Container>
            <PageHeader title="Wallets"/>
            <Row gutter={10}>
            {walletData.map(data =>
                <Col md={12} sm={24} xs={24} style={{marginTop:10}}>
                    <Wallet walletData={data} fetched={fetched} />
                </Col>)}
            </Row>
        </Container>
    )
}

export default WalletsScreen;