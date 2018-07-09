import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store';
import routes from './routes';
import history from './history';

import '../node_modules/b2wadvertising-theme/dist/b2wadvertising-theme.min.css';
import './styles/style.styl';

const store = configureStore({});

if (module.hot) {
  module.hot.accept();
}

const HotContainer = ({ children }) => {
  if (process.env.NODE_ENV === 'development') {
    return <AppContainer>{children}</AppContainer>;
  }
  return children;
};

ReactDOM.hydrate(
  <HotContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {routes()}
      </ConnectedRouter>
    </Provider>
  </HotContainer>,
  document.getElementById('main')
);
