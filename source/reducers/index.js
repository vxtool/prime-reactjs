// import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import entities from './entities';
import location from './location';
import userGroups from './user-groups';
import accounts from './accounts';

import login from '../views/login/login-reducer';

import menu from '../components/menu/menu-reducer';
import notification from '../components/notification/notification-reducer';
import loading from '../components/loading/loading-reducer';

export default (state = {}, action) => {
  return Object.assign({}, state, {
    entities: entities(state.entities, action),
    form: form(state.form, action),
    auth: login(state.auth, action),
    menu: menu(state.menu, action),
    notification: notification(state.notification, action),
    loading: loading(state.loading, action),
    location: location(state.location, action),
    userGroups: userGroups(state.userGroups, action),
    accounts: accounts(state.accounts, action),
  });
};
