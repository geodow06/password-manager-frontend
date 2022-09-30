import AppContext, { MyContextType } from "appContext";
import { Component } from "react";
import ScrollBar from "react-perfect-scrollbar";
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps } from "react-router";
import { matchRoutes, renderRoutes } from "react-router-config";
import { withRouter } from "react-router-dom";
import { setLayoutSettings } from "redux/actions/LayoutActions";
import { RootState } from "redux/store";
import { Accounts, Settings } from "types";
import Footer from "./components/structure/Footer";
import Topbar from "./components/structure/Topbar";
import { isEqual, merge } from "lodash";
import { setAccounts } from "redux/actions/AccountsActions";

type layoutState = {
    settings: Settings
}

const testAccounts = [
    {
        accountId: "1",
        accountName: "test1",
        value:"testValue1",
        imageSource: "testImg1",
        url: "testUrl1",
        userId: "1",
    },
    {
        accountId: "2",
        accountName: "test2",
        value: "testValue2",
        imageSource: "testImg2",
        userId: "2"
    }
];

class Layout extends Component<LayoutComponentProps, layoutState> {

    appContext: MyContextType;

    constructor(props: LayoutComponentProps, context: MyContextType) {
        super(props);

        this.appContext = context;

        // Add accounts to redux to simulate api call until functionality added
        props.setCurrentUserAccounts(testAccounts);

        this.updateSettingsFromRouter();
    }

    componentDidUpdate(prevProps: LayoutComponentProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.updateSettingsFromRouter();
        }
    }

    updateSettingsFromRouter = () : void => {
        const { routes } = this.appContext;
        const matched = matchRoutes(routes, this.props.location.pathname)[0];
        const { layoutSettings, setCurrentLayoutSettings } = this.props;

        if (matched && matched.route.settings) {
            const proposedSettings = merge({}, layoutSettings, matched.route.settings);
            if (!isEqual(layoutSettings, proposedSettings)) {
                setCurrentLayoutSettings(proposedSettings);
            }
        }
    }

    render() {
        const { routes } = this.appContext;
        const { layoutSettings } = this.props;

        return(
            <div className="layout">
                <div className="content-wrap position-relative">
                    {layoutSettings.topbar?.show && <Topbar/>}
                    <ScrollBar className="scrollable-content">
                        <div className="content">{renderRoutes(routes)}</div>
                        <div className="my-auto"/>
                    </ScrollBar>
                    {layoutSettings.footer?.show && <Footer/>}
                </div>
            </div>
        );
    }
}

const mapState = (state: RootState) => ({
    layoutSettings: state.layout.settings
})

const mapDispatch = {
    setCurrentLayoutSettings: (proposedSettings: Settings) => setLayoutSettings(proposedSettings),
    setCurrentUserAccounts: (proposedAccounts: Accounts) => setAccounts(proposedAccounts)
};

const connector = connect(mapState, mapDispatch);

// Props
type PropsFromRedux = ConnectedProps<typeof connector>

type LayoutComponentProps = RouteComponentProps & PropsFromRedux

Layout.contextType = AppContext;

export default withRouter(connector(Layout));
