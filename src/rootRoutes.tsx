import { Redirect } from "react-router";
import { route } from "types";
import dashboardRoutes from "views/dashboard/dashboardRoutes";
import sessionRoutes from "views/sessions/sessionRoutes";

const redirectRoute: route[] = [{
    path: "/",
    exact: true,
    component: () => <Redirect to="/home"/>
}];

const errorRoute: route[] = [{
    path: "*",
    component: () => <Redirect to="/session/404"/>
}];

const routes: route[] = [
    ...dashboardRoutes,
    ...sessionRoutes,
    ...redirectRoute,
    ...errorRoute
];

export default routes;