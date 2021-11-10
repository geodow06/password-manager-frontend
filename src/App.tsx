import AppContext from 'appContext';
import { Switch } from 'react-router';
import routes from "routes";
import history from "myHistory";
import Layout from 'layout/Layout';
import "styles/_app.scss";
import { Provider, ReactReduxContext } from 'react-redux';
import store from 'redux/store';
import { ConnectedRouter } from 'connected-react-router';

function App() {
  return (
    <AppContext.Provider value={{ routes }}>
      <Provider store={store} context={ReactReduxContext}>
        <ConnectedRouter history={history} context={ReactReduxContext}>
          <Switch>
            <Layout/>
          </Switch>
        </ConnectedRouter>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
