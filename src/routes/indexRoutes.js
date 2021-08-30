import { Spin } from "antd";
import React, { Suspense, lazy, useEffect } from "react";
import { Route, Switch, useRouteMatch, Redirect, useHistory } from "react-router-dom";
import  Login from "../containers/Login";
import withContainerProvider from "../unstated-containers/provider";
import { useSelector } from "react-redux";


const IndexRoutes = (props) => {

    const { path } = useRouteMatch();

    const authStore = useSelector(state => state.auth);

    const history = useHistory();

    useEffect(() => {
        if(authStore.loggedIn){
            history.push("/dashboard");
        }
        console.log("LOGGED_IN: "+authStore.loggedIn);
    });

    return (
        <Suspense fallback={<Spin />}>
            <Switch>

                <Route exact path={`${path}/login`} component={Login}/>

                <Route exact={true} path={`${path}`}>
                    <Redirect to={`${path}/login`} />
                </Route>

            </Switch>
        </Suspense>
    )
}

export default withContainerProvider(IndexRoutes);