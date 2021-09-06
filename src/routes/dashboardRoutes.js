import { useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Dashboard from "../containers/dashboard";
import withAppLayout from "../containers/AppLayout";
import WalletsRoutes from "./walletRoutes";

const DashboardRoutes = (props) => {

    const { path } = useRouteMatch();

    useEffect(()=>{
        console.log(path);
    }, []);

    return (
        <Switch>
            <Route exact path={`${path}`} component={Dashboard}/>
            <Route path={`${path}/wallets`} component={WalletsRoutes}/>
        </Switch>
    );
}

export default withAppLayout(DashboardRoutes);