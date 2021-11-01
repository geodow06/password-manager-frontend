import AppContext, { MyContextType } from "appContext";
import { Component } from "react";
import ScrollBar from "react-perfect-scrollbar";
import { RouteComponentProps } from "react-router";
import { matchRoutes, renderRoutes } from "react-router-config";
import { withRouter } from "react-router-dom";
import { settings } from "types";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";

class Layout extends Component<RouteComponentProps> {

    appContext: MyContextType;
    settings: settings

    constructor(props: any, context: MyContextType) {
        super(props);

        this.appContext = context;
        this.settings = this.updateSettingsFromRouter();
    }

    updateSettingsFromRouter = () : settings => {
        const { routes } = this.appContext;
        const matched = matchRoutes(routes, this.props.location.pathname)[0];
        const defaultSettings: settings = {
            topbar: {
                show:true
            },
            footer: {
                show: true
            }
        }

        if (matched && matched.route.settings) {
            return matched.route.settings;
        }

        return defaultSettings;
    }

    render() {
        const { routes } = this.appContext;
        return(
            <div className="layout">
                <div className="content-wrap position-relative">
                    {this.settings.topbar?.show && <Topbar/>}
                    <ScrollBar className="scrollable-content">
                        <div className="content">{renderRoutes(routes)}</div>
                        <div className="my-auto"/>
                    </ScrollBar>
                    {this.settings.footer?.show && <Footer/>}
                </div>
            </div>
        );
    }
}

Layout.contextType = AppContext;

export default withRouter(Layout);