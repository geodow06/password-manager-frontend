import AppContext from 'appContext';
import { Router, Switch } from 'react-router';
import routes from "rootRoutes";
import myHistory from "myHistory";
import Layout from 'layout/Layout';
import "styles/_app.scss";

function App() {
  return (
    <AppContext.Provider value={{ routes }}>
      <Router history={myHistory}>
        <Switch>
          <Layout/>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
