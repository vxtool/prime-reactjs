import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Translate from 'i18n-react';

import { requireAuth } from './helpers';

import PtBr from './config/translate/pt-br.json';

import Layout from './views/layout';
import Blank from './views/blank';

import ActionsList from './views/actions';
import Action from './views/action';

import AdvertisingList from './views/advertisings';
import Advertising from './views/advertising';

import UsersList from './views/users';
import User from './views/user';

import Login from './views/login';

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
        <Redirect to="/actions" />
      </Route>
      <BlankLayoutRoute exact path="/login" component={Login} />
      <DashboardRoute exact path="/actions" component={requireAuth(ActionsList)} />
      <DashboardRoute exact path="/actions/create" component={requireAuth(Action)} />
      <DashboardRoute exact path="/actions/:actionId" component={requireAuth(Action)} />
      <DashboardRoute exact path="/actions/:actionId/advertisings" component={requireAuth(AdvertisingList)} />
      <DashboardRoute exact path="/actions/:actionId/advertisings/create" component={requireAuth(Advertising)} />
      <DashboardRoute
        exact
        path="/actions/:actionId/advertisings/:advertisingId"
        component={requireAuth(Advertising)}
      />
      <DashboardRoute exact path="/users" component={requireAuth(UsersList)} />
      <DashboardRoute exact path="/users/create" component={requireAuth(User)} />
      <DashboardRoute exact path="/users/:id" component={requireAuth(User)} />
      <DashboardRoute exact path="/configs" component={requireAuth(ActionsList)} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};
