import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import { NavLink } from "react-router-dom";

const { Content, Sider, Header } = Layout;

const mainLayoutStyle = {
    minHeight: "100%"
}

export default (Component) => {

    return (props) => {
        const [activeKey, setActiveKey] = useState("/dashboard");

        return (

        <Layout style={mainLayoutStyle}>
            <Header>

            </Header>
            <Layout>
                {(window.innerWidth > 991) && <Sider>
                    <Menu activeKey ={activeKey}>
                        <MenuItem icon={"some-icon"} title="Dashboard" key="/dashboard">
                            <NavLink to="/dashboard">
                                Dashboard
                            </NavLink>
                        </MenuItem>
                        <MenuItem icon={"some-icon"} title="Wallets" key="/dashboard/wallets">
                            <NavLink to="/dashboard/wallets">
                                Wallets
                            </NavLink>
                        </MenuItem>
                        <MenuItem icon={"some-icon"} title="Transactions" key="/dashboard/transactions">
                            <NavLink to="/dashboard/transactions">
                                Transactions
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