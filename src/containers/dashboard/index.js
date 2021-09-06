import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Container } from "../../components/Container";
import { PageHeader } from "../../components/PageHeader";

const Dashboard = (props) => {

    const { path } = useRouteMatch();

    return (
        <Container>
            <PageHeader title="Dashboard" />
        </Container>
    );
}

export default Dashboard;