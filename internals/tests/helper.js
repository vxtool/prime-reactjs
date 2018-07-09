import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { useRouterHistory } from 'react-router';
import { createHistory } from 'history';
import actions from 'views/actions/actions-reducer';

export function mockStore(mock) {
  const reducers = {
    actions,
  };

  const history = useRouterHistory(createHistory)({
    basename: '/',
  });

  const routingMiddleware = routerMiddleware(history);

  Object.keys(mock).forEach(key => {
    reducers[key] = (state, action) => mock[key];
  });

  return createStore(
    combineReducers(reducers),
    compose(
      applyMiddleware(routingMiddleware, thunk, promiseMiddleware()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}

export const mountConnected = (component, store) =>
  mount(
    <Provider store={store}>
      {component}
    </Provider>
  );
