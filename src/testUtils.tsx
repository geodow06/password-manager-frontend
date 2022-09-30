import { render } from "@testing-library/react";
import AppContext from "appContext";
import { ConnectedRouter } from "connected-react-router";
import { createMemoryHistory } from "history";
import { ComponentType } from "react";
import { Provider, ReactReduxContext } from "react-redux";
import { Switch } from "react-router";
import { configureStore } from "redux/store";
import routes from "routes";



export const renderWithConnectedRouter = (
        ui: JSX.Element,
        preLoadedState: any = {},
        route: string = "/"
    ) => {

    const store = configureStore(preLoadedState);

    const history = createMemoryHistory({initialEntries: [route]});

    const Wrapper: ComponentType = ({ children }: any) => (
        <AppContext.Provider value={{ routes }}>
            <Provider store={store} context={ReactReduxContext}>
                <ConnectedRouter history={history} context={ReactReduxContext}>
                    <Switch>
                        {children}
                    </Switch>
                </ConnectedRouter>
            </Provider>
        </AppContext.Provider>
    );

    return {
        ...render(ui, {wrapper: Wrapper}),
        history,
        store
    };
};
