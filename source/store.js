import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

export default initialState => {
  const state = Object.assign({}, window.__INITIAL_STATE__, initialState);
  const middlewaresList = [thunkMiddleware, routerMiddleware(history), promiseMiddleware()];
  const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
  const middlewares = compose(applyMiddleware(...middlewaresList), devTools);

  return createStore(reducers, state, middlewares);
};
