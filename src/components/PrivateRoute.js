import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '~/utils/auth';

const PrivateRoute = ({ component: Component, ...params }) => (
  <Route {...params} render={props => (
    isAuthenticated() ? (
      <Component { ...props } />
    ) : (
      <Redirect to={{ pathname: '/login', state: props.location }} />
    )
  )} />
);

export default PrivateRoute;
