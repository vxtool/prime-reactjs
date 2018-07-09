import React from 'react';
import PropTypes from 'prop-types';

import Notification from '../components/notification';
import Loading from '../components/loading';

const Blank = props => (
  <main>
    {props.children}

    <Notification buttonClose />
    <Loading />
  </main>
);

Blank.propTypes = {
  children: PropTypes.node,
};

export default Blank;
