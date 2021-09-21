import { Col, Table, Row } from "antd";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import BalanceCard from "../../components/BalanceCard";
import Card from "../../components/Card";
import { Container } from "../../components/Container";
import { PageHeader } from "../../components/PageHeader";
import Wallet from "../../components/Wallet";
import { useWallets } from "../../hooks";

const Dashboard = (props) => {

    const { path } = useRouteMatch();

    const { walletData } = useWallets();

    return (
        <Container>
            <PageHeader title="Dashboard" />
            <Row gutter={10}>
                {walletData[0] && <Col md={12}>
                    <Wallet walletData={walletData[0]} fetched={true} />
                </Col>}
                <Col md={12}>
                    <Card title="Exchange Rate" style={{ height: "100%" }}>
                        <div style={{ height: "100%" }}></div>
                        {/* <Table style={{borderRadius:"10px"}} dataSource={[]}/> */}
                    </Card>
                </Col>
            </Row>
            <Row gutter={10}>
                <Col span={16}>
                    <Card title="Income" style={{ marginTop: 20 }}>
                        <Table style={{ borderRadius: "10px" }} columns={[
                            {
                                title: "#",
                                dataIndex: ""
                            },
                            {
                                title: "Name",
                                dataIndex: ""
                            },
                            {
                                title: "Amount",
                                dataIndex: ""
                            },
                            {
                                title: "Date",
                                dataIndex: ""
                            },
                        ]} dataSource={[]} />
                    </Card>
                </Col>

                <Col span={8}>
                    <Card title="Payment History" style={{ marginTop: 20, height: "100%" }}>
                        <div style={{ height: "100%" }}></div>
                        {/* <Table style={{borderRadius:"10px"}} dataSource={[]}/> */}
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;