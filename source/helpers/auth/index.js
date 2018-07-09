import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../history';

import { getToken, removeUserData } from '../local-storage';
import authentication from '../../api/authentication';

export const requireAuth = ComposedComponent => {
  class Authentication extends Component {
    constructor(props) {
      super(props);

      this.state = {
        authenticated: false,
      };
    }

    componentWillMount() {
      const token = getToken();
      authentication
        .verifyToken(token)
        .then(response => {
          this.setState({
            authenticated: true,
          });
        })
        .catch(error => {
          this.setState({
            authenticated: false,
          });
          removeUserData();
          history.push('/login');
        });
    }

    render() {
      return (
        <div>
          {this.state.authenticated === true ? <ComposedComponent {...this.props} /> : null}
        </div>
      );
    }
  }
  return connect(null, {})(Authentication);
};
