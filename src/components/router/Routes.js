import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from '~/components/router/PrivateRoute';
import AppRoute from '~/components/router/AppRoute';

import appRoutes from '~/domains/app/routes';
import colorsRoutes from '~/domains/colors/routes';
import authRoutes from '~/domains/auth/routes';

const routes = colorsRoutes
  .concat(authRoutes)
  .concat(appRoutes);

const Routes = () => (
  <Router>
    <Switch>
      {
        routes.map((route, i) => {
          const { isPrivate, ...props } = route;
          const Component = (isPrivate === true ? PrivateRoute : AppRoute);
          return <Component key={i} exact {...props} />
        })
      }
    </Switch>
  </Router>
);

export default Routes;
