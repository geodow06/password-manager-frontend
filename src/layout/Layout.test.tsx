import { render } from "@testing-library/react";
import AppContext from "appContext";
import { ConnectedRouter } from "connected-react-router";
import {  createMemoryHistory } from "history";
import { ComponentType } from "react";
import { Provider, ReactReduxContext } from "react-redux";
import { Switch } from "react-router";
import { configureStore } from "redux/store";
import Layout from "./Layout";
import routes from "routes";

const store = configureStore();

export const renderWithConnectedRouter = (
        ui: JSX.Element, 
        initialState: any = {},
        route: string = "/" 
    ) => {
        
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

describe('<Layout/>', () => {
    describe('Route tests', () => {
        describe('/', () => {
            test('Should render Topbar component', () => {
                const { getByText } = renderWithConnectedRouter(<Layout/>, store.getState(), "/");
                expect(getByText(/Topbar/i)).toBeInTheDocument();
            });
            test('Should render Dashboard component', () => {
                const { getByText } = renderWithConnectedRouter(<Layout/>, store.getState(), "/");
                expect(getByText(/Dashboard/i)).toBeInTheDocument();
            });
            test('Should render Footer component', () => {
                const { getByText } = renderWithConnectedRouter(<Layout/>, store.getState(), "/");
                expect(getByText(/Footer/i)).toBeInTheDocument();
            });
        });

        describe('/session/signin', () => {
            test('Should not render topbar and footer', () => {
                const { getByText } = renderWithConnectedRouter(<Layout/>, store.getState(), '/session/signin');
                
                expect(() => getByText(/Topbar/i)).toThrowError();
                expect(() => getByText(/Footer/i)).toThrowError();
            });
        });

        describe('Unkown path', () => {
            test('Should redirect to /session/404', () => {
                const { history } = renderWithConnectedRouter(<Layout/>, store.getState(), "/randompath")
                expect(history.location.pathname).toEqual('/session/404');
            });
            test('Should render NotFound component', () => {
                const { getByText } = renderWithConnectedRouter(<Layout/>, store.getState(), "/randompath")
                expect(getByText(/Not Found/i)).toBeInTheDocument();
            });
        })
    });
});