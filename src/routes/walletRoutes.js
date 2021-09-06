import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { Switch } from "react-router-dom";
import WalletFundScreen from "../containers/wallets/WalletsFundScreen";
import WalletsScreen from "../containers/wallets/WalletsScreen";

const WalletsRoutes = (props) => {

    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={`${path}/fund/:id`} component={WalletFundScreen}/>
            <Route exact path={`${path}`} component={WalletsScreen}/>
        </Switch>
    )
}

export default WalletsRoutes;