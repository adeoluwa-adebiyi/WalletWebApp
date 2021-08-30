import IndexRoutes from "./indexRoutes";
import DashboardRoutes from "./dashboardRoutes";
import withAppLayout from "../containers/AppLayout";
import Login from "../containers/Login";
import { Redirect } from "react-router-dom";


export const protectedRoutes = [
    { path: "/dashboard", component: DashboardRoutes },
];

export const unprotectedRoutes = [
    { path: "/index", component: IndexRoutes },
    { path: "/", component: (props) =><Redirect to="/index"/>, exact: true },
];