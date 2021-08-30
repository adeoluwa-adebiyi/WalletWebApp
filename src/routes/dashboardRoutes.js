import { useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Dashboard from "../containers/dashboard";
import withAppLayout from "../containers/AppLayout";

const DashboardRoutes = (props) => {

    const { path } = useRouteMatch();

    useEffect(()=>{
        console.log(path);
    }, []);

    return (
        <Switch>
            <Route exact path={`${path}`} component={Dashboard}/>
        </Switch>
    );
}

export default withAppLayout(DashboardRoutes);