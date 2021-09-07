import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppNav from "../components/AppNav";

const { Content, Sider, Header } = Layout;

const mainLayoutStyle = {
    minHeight: "100%"
}

export default (Component) => {

    return (props) => {
        const [activeKey, setActiveKey] = useState("/dashboard");

        return (

            <Layout style={mainLayoutStyle}>
                <AppNav/>
                <Layout>
                    {(window.innerWidth > 991) && <Sider>
                        <Menu activeKey={activeKey}>
                            <MenuItem icon={<FontAwesomeIcon icon={["fa", "home"]} />}  title="Dashboard" key="/dashboard">
                                <NavLink to="/dashboard">
                                    &nbsp;Dashboard
                                </NavLink>
                            </MenuItem>
                            <MenuItem icon={<FontAwesomeIcon icon={["fa", "wallet"]} />} title="Wallets" key="/dashboard/wallets">
                                <NavLink to="/dashboard/wallets">
                                    &nbsp;Wallets
                                </NavLink>
                            </MenuItem>
                            <MenuItem icon={<FontAwesomeIcon icon={["fa", "money-check"]} />} title="Transactions" key="/dashboard/transactions">
                                <NavLink to="/dashboard/transactions">
                                    &nbsp;Transactions
                                </NavLink>
                            </MenuItem>
                        </Menu>
                    </Sider>}
                    <Content>
                        <Component {...{ props }} />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}