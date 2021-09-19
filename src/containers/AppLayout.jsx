import React, { useEffect, useState } from "react";
import { Layout, Menu, Row, Col, Button } from "antd";
import MenuItem from "../components/MenuItem";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppNav from "../components/AppNav";
import { withRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { useHistory } from "react-router-dom";

const { Content, Sider, Header } = Layout;

const mainLayoutStyle = {
    minHeight: "100%"
}

const contentStyle = {
    height: "100vh !important",
    maxHeight: "100vh !important",
    minHeight: "100vh !important",
    // overflowY: "scroll !important"
}

const AppSiderStyle = createGlobalStyle` 
.ant-layout-sider{
    max-width: 250px !important;
    width: 250px !important;
    min-width: 250px !important;
    background-color: #f0f2f5 !important;
}
.ant-layout-sider-children{
    padding: 10px;
    background-color: #ffffff;
    border: none;
}
.ant-menu{
    border:none;
    background: transparent;
}
.ant-layout-content{
    height: 100vh !important;
    max-height: 100vh !important;
    min-height: 100vh !important;
    overflow-y: scroll;
}
`

export default (Component) => {

    return withRouter((props) => {

        const history = useHistory();

        const [activeKey, setActiveKey] = useState(history.location.pathname);
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);

        useEffect(() => {
            setActiveKey(history.location.pathname);
        }, [history.location.pathname]);

        useEffect(() => {
            window.addEventListener("resize", (event) => {
                setWindowWidth(window.innerWidth);
            })
        }, []);

        useEffect(() => {
            console.log(windowWidth);
        })

        return (

            <Layout style={mainLayoutStyle}>
                <AppSiderStyle />
                <Layout>
                    {true &&
                        <Sider collapsed={windowWidth < 991} style={{ maxWidth: "300px"}}>

                            <span style={{fontSize:"2em", fontWeight:"bolder", marginLeft: 20}}>SupaPay</span>

                            <Menu style={{ display: "flex", flexDirection: "column", flex:1,height: "90%", alignSelf:"stretch", paddingTop:"10%" }}
                                activeKey={activeKey}
                                selectable={true}
                                defaultSelectedKeys={[activeKey]}>

                                <MenuItem icon={<FontAwesomeIcon icon={["fa", "home"]} />} title="Dashboard" key="/dashboard">
                                    <NavLink to="/dashboard">
                                        Dashboard
                                    </NavLink>
                                </MenuItem>
                                <MenuItem icon={<FontAwesomeIcon icon={["fa", "wallet"]} />} title="Wallets" key="/dashboard/wallets">
                                    <NavLink to="/dashboard/wallets">
                                        Wallets
                                    </NavLink>
                                </MenuItem>
                                <MenuItem icon={<FontAwesomeIcon icon={["fa", "money-check"]} />} title="Transactions" key="/dashboard/transactions">
                                    <NavLink to="/dashboard/transactions">
                                        Transactions
                                    </NavLink>
                                </MenuItem>
                                <div style={{ display: "flex", flexDirection: "column", flex: 10, justifyContent: "flex-end", alignSelf: "stretch"}}>
                                    <MenuItem icon={<FontAwesomeIcon icon={["fa", "sign-out-alt"]} />} title="Sign out">
                                        Signout                                    
                                    </MenuItem>
                                </div>
                                
                            </Menu>

                        </Sider>}
                    <Content style={contentStyle}>
                        <AppNav/>
                        <Component {...{ props, style: { ...contentStyle } }} />
                    </Content>
                </Layout>
            </Layout>
        );
    });
}