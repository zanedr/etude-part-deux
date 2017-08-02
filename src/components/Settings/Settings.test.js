import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';

import { Settings } from './Settings';

describe('Settings', () => {
  it('should render a settings container', () => {
    const wrapper = shallow(<Settings />);
    expect(wrapper.find('.settings-container').length).toBe(1);
  });

  it('should render all of the settings inputs', () => {
    const wrapper = shallow(<Settings />);
    expect(wrapper.find('.settings-input').length).toBe(12);
  });

  it('should have state with initial values if props are not passed in', () => {
    const initialState = {
      id: 0,
      title: '',
      artist: '',
      timestamps: '',
      tab: '',
      audio: '',
      priority: 0
    };

    const wrapper = shallow(<Settings />);

    expect(wrapper.state()).toEqual(initialState)
  });

  it('should have state with defined values after receiving props', () => {
    const mockFn = jest.fn();
    const settingsProps = {
      id: 2,
      title: 'hi',
      artist: 'there',
      timestamps: '',
      tab: '',
      audio: '',
      priority: 0
    };

    const wrapper = mount(<Settings {...settingsProps} />);

    expect(wrapper.state()).toEqual(settingsProps)
  });
});
