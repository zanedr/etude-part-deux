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

  it('should have state with initial values', () => {
    const mockFn = jest.fn();
    const initialState = {
      id: 0,
      title: '',
      artist: '',
      timestamps: '',
      tab: '',
      audio: '',
      priority: 0
    };

    const wrapper = shallow(<Settings updateTab={mockFn}
                                      closeOut={mockFn}
                                      id={0}
                                      title={''}
                                      artist={''}
                                      timestamps={''}
                                      tab={''}
                                      audio={''}
                                      priority={0}
                                      closeSettings={mockFn} />);

    expect(wrapper.state()).toEqual(initialState)
  });

  it('should have state with defined values after getting mounted', () => {
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

    const wrapper = mount(<Settings updateTab={mockFn}
                                    closeOut={mockFn}
                                    id={2}
                                    title={'hi'}
                                    artist={'there'}
                                    timestamps={''}
                                    tab={''}
                                    audio={''}
                                    priority={0}
                                    closeSettings={mockFn} />);

    expect(wrapper.state()).toEqual(settingsProps)
  });
});
