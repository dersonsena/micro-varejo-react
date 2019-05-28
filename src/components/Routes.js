import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '~/components/PrivateRoute';

import colorsRoutes from '~/domains/colors/routes';

const routes = colorsRoutes;

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={() => <h1>Root Route</h1>} />
      <Route exact path="/login" component={() => <h1>Página de Login</h1>} />
      <PrivateRoute exact path="/logout" component={() => <h1>Página de Login</h1>} />
      {
        routes.map((route, i) => {
          const Component = (route.private === true ? PrivateRoute : Route);
          return <Component key={i} exact path={route.path} component={route.component} />
        })
      }
    </Switch>
  </Router>
);

export default Routes;
