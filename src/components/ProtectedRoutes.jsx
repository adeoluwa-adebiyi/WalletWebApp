import withContainerProvider from "../unstated-containers/provider";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";


const ProtectedRoute = ({component, path, key, redirectTo="/index/login", ...otherProps}) => {

    const authState = useSelector(state => state.auth);

    console.log(authState);

    return authState.loggedIn?<Route key={key} path={path} component={component} {...{otherProps}}/>:<Redirect to={redirectTo}/>;
    
}

export default withContainerProvider(ProtectedRoute);