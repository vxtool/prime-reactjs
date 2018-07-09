import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Layout = props => (
  <main>
    <div className={`${props.open ? '' : 'full'} hold-container`}>
      {props.children}
    </div>
  </main>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default connect(null)(Layout);
