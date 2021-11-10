import { route, Settings } from "types";
import NotFound from "./NotFound";
import SignIn from "./SignIn";

const sessionRouteSettings: Settings = {
    topbar: {
        show: false
    },
    footer: {
        show: false
    }
}

const sessionRoutes: route[] = [
    {
        path: "/session/signin",
        component: SignIn,
        settings: sessionRouteSettings
    },
    {
        path: "/session/404",
        component: NotFound,
        settings: sessionRouteSettings
    }
];

export default sessionRoutes;