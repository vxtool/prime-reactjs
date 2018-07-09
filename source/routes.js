import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Translate from 'i18n-react';

// import { requireAuth } from './helpers';

import PtBr from './config/translate/pt-br.json';

import Layout from './layouts/default';
import Blank from './layouts/blank';

// import Login from './pages/login';

import history from './history';

import { getToken } from './helpers';

Translate.setTexts(PtBr);

const DashboardRoute = ({ component: Component, ...rest }) => {
  if (getToken() === null) {
    history.push('/login');
  }

  return (
    <Route
      {...rest}
      exact
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

const BlankLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      exact
      render={matchProps => (
        <Blank>
          <Component {...matchProps} />
        </Blank>
      )}
    />
  );
};

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      {/* <BlankLayoutRoute exact path="/login" component={Login} /> */}
      {/* <DashboardRoute exact path="/users" component={requireAuth(UsersList)} />
      <DashboardRoute exact path="/users/create" component={requireAuth(User)} />
      <DashboardRoute exact path="/users/:id" component={requireAuth(User)} /> */}
      <Redirect from="*" to="/" />
    </Switch>
  );
};
