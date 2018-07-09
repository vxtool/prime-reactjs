import React from 'react';
import PropTypes from 'prop-types';

const Blank = props => (
  <main>
    {props.children}
  </main>
);

Blank.propTypes = {
  children: PropTypes.node,
};

export default Blank;
