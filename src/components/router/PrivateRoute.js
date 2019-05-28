import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '~/utils/auth';

const PrivateRoute = ({ component: Component, layout: Layout, ...params }) => {
  return (
    <Route {...params} render={props => (
      isAuthenticated() ? (
        <Layout>
          <Component { ...props } />
        </Layout>
      ) : (
        <Redirect to={{ pathname: '/login', state: props.location }} />
      )
    )} />
  );
}

export default PrivateRoute;
