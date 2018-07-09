import React from 'react';
import PropTypes from 'prop-types';

// import styles from './default.scss';

class Layout extends PureComponent {
  render() {
    return (
      <main>
        <div className={`${props.open ? '' : 'full'} hold-container`}>
          {props.children}
        </div>
      </main>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
