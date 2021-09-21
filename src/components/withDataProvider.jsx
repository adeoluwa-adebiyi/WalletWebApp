import React from "react";
const withDataProvider = (Component, stateProvider, selector, transformer = (data) => data) => {
    const state = stateProvider();
    const computedState = transformer(selector(state))
    return (props) => (<React.Fragment>
        <Component {...{...props, ...computedState}} />
    </React.Fragment>)
}

export default withDataProvider;