import React, { useEffect, useState } from "react";
import { Layout, Menu, Row, Col, Button, Card, Spin } from "antd";
import MenuItem from "../components/MenuItem";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppNav from "../components/AppNav";
import { withRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { useHistory } from "react-router-dom";
import BalanceCard from "../components/BalanceCard";
import withDataProvider from "../components/withDataProvider";
import { AUTH_TOKEN_KEY, NAIRA_SYMBOL } from "../config/data";
import { CogOutline, HomeOutline, WalletOutline, CashOutline, SendOutline, AirplaneOutline, PaperPlaneOutline } from "react-ionicons";
import { useDispatch } from "react-redux";
import { fetchUserWalletsAction, setWalletFundDetails } from "../stores/actions";
import { useSelector } from "react-redux";
import { transformWalletData } from "../utils";
import { useWallets } from "../hooks";
import WalletFundModal from "./wallets/WalletFundModal";
import { ExitOutline } from "react-ionicons";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
`;

export default (Component) => {

    return withRouter((props) => {

        const history = useHistory();

        const [activeKey, setActiveKey] = useState(history.location.pathname);
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);

        const [state, setState] = useState({
            wallets: [{
                balance: 75000,
                currencySymbol: NAIRA_SYMBOL
            }]
        });

        const dispatch = useDispatch();

        const fetchWallets = async () => {
            dispatch(fetchUserWalletsAction());
        }

        const { defaultWallet, fetched, walletsState } = useWallets();

        useEffect(() => {
            setActiveKey(history.location.pathname);
        }, [history.location.pathname]);

        const closeFundWalletModal = () => {
            dispatch(setWalletFundDetails(null, null));
        }

        useEffect(() => {
            window.addEventListener("resize", (event) => {
                setWindowWidth(window.innerWidth);
            })
            fetchWallets();
        }, []);

        // const DefaultWalletBalanceCard = withDataProvider(BalanceCard, () => useSelector(state => state.wallets), (source) => ({...source.wallets[source.defaultWalletId], balance: source.balances[source.defaultWalletId]}), (useSelector(state => state.wallets.wallets)).length > 0, transformWalletData);

        return (

            <Layout style={mainLayoutStyle}>
                {<WalletFundModal visible={walletsState?.walletFund?.walletFundModalVisible ?? false} closeModal={closeFundWalletModal} />}
                <AppSiderStyle />
                <ToastContainer
                    position="top-right"
                    // autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {/* Same as */}
                <ToastContainer />
                <Layout>
                    {windowWidth >= 991 &&
                        <Sider style={{ maxWidth: "300px" }}>

                            {!fetched ? <Card><Spin /></Card> : <BalanceCard balance={defaultWallet.balance} />}

                            <Menu style={{ display: "flex", flexDirection: "column", flex: 1, alignSelf: "stretch", height: "80%", paddingTop: "10%" }}
                                activeKey={activeKey}
                                selectable={true}
                                defaultSelectedKeys={[activeKey]}>

                                <MenuItem icon={<HomeOutline
                                    // color={'#00000'}
                                    height="20px"
                                    width="20px"
                                />} title="Dashboard" key="/dashboard">
                                    <NavLink to="/dashboard">
                                        Dashboard
                                    </NavLink>
                                </MenuItem>
                                <MenuItem icon={<WalletOutline
                                    // color={'#00000'}
                                    height="20px"
                                    width="20px"
                                />} title="Wallets" key="/dashboard/wallets">
                                    <NavLink to="/dashboard/wallets">
                                        Wallets
                                    </NavLink>
                                </MenuItem>
                                <MenuItem icon={<CashOutline
                                    // color={'#00000'}
                                    height="20px"
                                    width="20px"
                                />} title="Transactions" key="/dashboard/transactions">
                                    <NavLink to="/dashboard/transactions">
                                        Transactions
                                    </NavLink>
                                </MenuItem>
                                <MenuItem icon={<PaperPlaneOutline
                                    // color={'#00000'}
                                    height="20px"
                                    width="20px"
                                />} title="Send" key="/dashboard/send">
                                    <NavLink to="/dashboard/send">
                                        Send
                                    </NavLink>
                                </MenuItem>
                                <div style={{ display: "flex", flexDirection: "column", flex: 10, justifyContent: "flex-end", alignSelf: "stretch" }}>
                                    <MenuItem onClick={()=>{
                                        sessionStorage.removeItem(AUTH_TOKEN_KEY);
                                        window.location.reload();
                                    }} icon={<ExitOutline
                                        // color={'#00000'}
                                        height="20px"
                                        width="20px"
                                    />} title="Sign Out">
                                        Sign Out
                                    </MenuItem>
                                </div>

                            </Menu>

                        </Sider>}
                    <Content style={contentStyle}>
                        {/* <AppNav/> */}
                        <Component {...{ props, style: { ...contentStyle } }} />
                    </Content>
                </Layout>
            </Layout>
        );
    });
}