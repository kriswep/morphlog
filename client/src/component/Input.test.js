/* globals test expect */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Input from './Input';

test('Input renders a input', () => {
  const wrapper = shallow(<Input name="myName" data-prop="myData" />);
  expect(wrapper).toExist();
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('Input renders a textarea', () => {
  const wrapper = shallow(
    <Input textarea label="myLabel" name="myName" data-prop="myData" />,
  );
  expect(wrapper).toExist();
  expect(toJson(wrapper)).toMatchSnapshot();
});
