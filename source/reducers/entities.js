import { Map } from 'immutable';

import actions from '../views/actions/actions-reducer';
import advertisings from '../views/advertisings/advertisings-reducer';
import users from '../views/users/users-reducer';

import actionCreate from '../views/action/action-create-reducer';
import actionRead from '../views/action/action-read-reducer';

import advertisingCreate from '../views/advertising/advertising-create-reducer';
import advertisingRead from '../views/advertising/advertising-read-reducer';

import userCreate from '../views/user/user-create-reducer';
import userRead from '../views/user/user-read-reducer';

import audiences from '../components/audiences/audiences-reducer';

const user = (state = Map(), action) => {
  return state.merge({
    create: userCreate(state.get('create'), action),
    read: userRead(state.get('read'), action),
  });
};

const advertising = (state = Map(), action) => {
  return state.merge({
    create: advertisingCreate(state.get('create'), action),
    read: advertisingRead(state.get('read'), action),
  });
};

const actionReducer = (state = Map(), action) => {
  return state.merge({
    create: actionCreate(state.get('create'), action),
    read: actionRead(state.get('read'), action),
  });
};

const entities = (state = Map(), action) => {
  return state.merge({
    actions: actions(state.get('actions'), action),
    action: actionReducer(state.get('action'), action),
    advertisings: advertisings(state.get('advertisings'), action),
    advertising: advertising(state.get('advertising'), action),
    users: users(state.get('users'), action),
    user: user(state.get('user'), action),
    audiences: audiences(state.get('audiences'), action),
  });
};

export default entities;
