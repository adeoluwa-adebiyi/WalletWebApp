import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { Switch } from "react-router-dom";
import Send from "../containers/send";

const SendRoutes = (props) => {

    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={`${path}`} component={Send}/>
        </Switch>
    )
}

export default SendRoutes;