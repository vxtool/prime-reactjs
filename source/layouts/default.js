import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/header';
import Menu from '../components/menu';
import Footer from '../components/footer';
import Notification from '../components/notification';
import Loading from '../components/loading';

const Layout = props => (
  <main>
    <Header />
    <Menu />
    <div className={`${props.open ? '' : 'full'} hold-container`}>
      {props.children}
    </div>
    <Footer />

    <Notification buttonClose />
    <Loading />
  </main>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default connect(
  ({ menu, notification }) => ({
    open: menu.get('open'),
  }),
  {}
)(Layout);
