import React from "react";
import { useRouteMatch } from "react-router-dom";
import { PageHeader } from "antd";

const Dashboard = (props) => {

    const { path } = useRouteMatch();

    return (
            <PageHeader title="Dashboard"/>
    );
}

export default Dashboard;