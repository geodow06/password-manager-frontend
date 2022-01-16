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
    describe('Router tests', () => {
        describe('Static rendering of components', () => {
            describe('At /', () => {
                let renderReturn: any;

                beforeEach(() => {
                    renderReturn = renderWithConnectedRouter(<Layout/>, store.getState(), "/");
                });
                
                test('Should render Topbar component', () => {
                    expect(renderReturn.getByTestId(/topbar/i)).toBeInTheDocument();
                });
                test('Should render Dashboard component', () => {
                   
                    expect(renderReturn.getByTestId("dashboard")).toBeInTheDocument();
                });
                test('Should render Footer component', async () => {
                    expect(await renderReturn.findByText(/Footer/i)).toBeInTheDocument();
                });
            });

            describe('At /session/signin', () => {
                test('Should not render topbar and footer', () => {
                    const { getByText, getByTestId } = renderWithConnectedRouter(<Layout/>, store.getState(), '/session/signin');
                    
                    expect(() => getByTestId(/topbar/i)).toThrowError();
                    expect(() => getByText(/Footer/i)).toThrowError();
                });
            });

            describe('At /session/404', () => {
                let renderReturn: any;

                beforeAll(() => {
                    renderReturn  = renderWithConnectedRouter(<Layout/>, store.getState(), "/session/404");
                });

                test('Should render NotFound component', () => {
                    expect(renderReturn.getByText(/Not Found/i)).toBeInTheDocument();
                });
                test('Should not render Topbar', () => {
                    expect(() => renderReturn.getByText(/Topbar/i)).toThrowError();
                });
                test('Should not render Footer', () => {
                    expect(() => renderReturn.getByText(/Footer/i)).toThrowError();
                });
            });
        });

        describe('Router updates', () => {
            describe('Should redirect to', () => {
                test('/session/404 for unsupported pathname', async () => {
                    const { history, findByText } = renderWithConnectedRouter(<Layout/>, store.getState(), "/randompath")
                    expect(history.location.pathname).toEqual('/session/404');
                    expect(await findByText(/Not Found/i)).toBeInTheDocument();
                });
                test('/home when entering at the root /', () => {
                    const { history, getByTestId } = renderWithConnectedRouter(<Layout/>, store.getState(), "/")
                    expect(history.location.pathname).toEqual('/home');
                    expect(getByTestId("dashboard")).toBeInTheDocument();
                });
            });
        });
    });
});