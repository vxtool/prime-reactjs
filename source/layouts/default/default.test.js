import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Layout from './index';

import { Provider } from 'react-redux';
import store  from '../../../internals/tests/store';

/** @test {Layout} */
describe('Layout component', () => {
  /** @test {Layout#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = mount(
        <Provider store={store}>
          <Layout />
        </Provider>
      );
      expect(wrapper.find(Layout).length).to.equal(1);
    });
  });
});
