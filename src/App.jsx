import React, { useEffect } from "react";
import { useContainer } from "unstated-next";
import withContainerProvider from "./unstated-containers/provider";
import Containers from "./unstated-containers/containers";
import AppRoutes from "./App.route";
import { Provider } from "react-redux";
import store from "./stores";
import "antd/dist/antd.css";

const { authContainer } = Containers;

const App = (props) => {
    return (
        <Provider store={store}>
            <AppRoutes/>
        </Provider>
    )
}

export default withContainerProvider(App);