/* globals test expect jest */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from './App';

test('renders without crashing and correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toExist();
  expect(toJson(wrapper)).toMatchSnapshot();
});
