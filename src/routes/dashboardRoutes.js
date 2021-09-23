import { useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Dashboard from "../containers/dashboard";
import withAppLayout from "../containers/AppLayout";
import WalletsRoutes from "./walletRoutes";
import SendRoutes from "./sendRoutes";

const DashboardRoutes = (props) => {

    const { path } = useRouteMatch();

    useEffect(()=>{
        console.log(path);
    }, []);

    return (
        <Switch>
            <Route exact path={`${path}`} component={Dashboard}/>
            <Route path={`${path}/wallets`} component={WalletsRoutes}/>
            <Route path={`${path}/send`} component={SendRoutes}/>
        </Switch>
    );
}

export default withAppLayout(DashboardRoutes);