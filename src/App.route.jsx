import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoutes";
import { protectedRoutes, unprotectedRoutes } from "./routes/routes";

const AppRoute = (props) => {
    return (
            <BrowserRouter>
                <Switch>
                    {protectedRoutes.map((route, index) => <ProtectedRoute key={index} {...{...route}} />)}

                    {unprotectedRoutes.map((route, index) => <Route key={index} {...route} />)}
                </Switch>
            </BrowserRouter>
    );
}

export default AppRoute;