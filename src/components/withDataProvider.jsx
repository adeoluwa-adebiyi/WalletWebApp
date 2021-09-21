import { Card, Spin } from "antd";
import React from "react";
const withDataProvider = (Component, stateProvider, selector, dataLoaded, transformer = (data) => data) => {
    const state = stateProvider();
    const computedState = transformer(selector(state))
    return (props) => (<React.Fragment>
        {!dataLoaded && <Card><Spin/></Card>}
        {dataLoaded && <Component {...{...props, ...computedState}} />}
    </React.Fragment>)
}

export default withDataProvider;