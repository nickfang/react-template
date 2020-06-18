import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from '../App';

describe('<App />', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
  test('the header exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1')).toBeDefined();
    expect(wrapper.find('h1').text()).toBe('Hello, Universe!');
  });
});
