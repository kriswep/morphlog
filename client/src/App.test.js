/* globals test expect jest */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from './App';

// mockout these, since they produce errors
import Profile from './component/Profile';
import Projects from './component/Projects';
import Project from './component/Project';

jest.mock('./component/Profile', () => jest.fn());
jest.mock('./component/Projects', () => jest.fn());
jest.mock('./component/Project', () => jest.fn());

test('renders without crashing and correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toExist();
  expect(toJson(wrapper)).toMatchSnapshot();
});
