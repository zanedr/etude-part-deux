import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';

import App from './App';
jest.mock("../global.scss", () => jest.fn());

describe('App', () => {
  it('should render a section with a classname of app', () => {
    fetchMock.get('/api/v1/songs', {status: 200});

    const wrapper = shallow(<App />);

    expect(wrapper.find('.App').length).toBe(1);
  });

  it('should begin with default values in state', () => {
    fetchMock.get('/api/v1/songs', {status: 200});

    const wrapper = shallow(<App />);

    expect(wrapper.state().songs).toEqual([]);
    expect(wrapper.state().selectedSong).toEqual({});
    expect(wrapper.state().addSong).toBe(false);
  });

  it('should update addSong in state on click', () => {
    fetchMock.get('/api/v1/songs', {status: 200});

    const wrapper = shallow(<App />);
    const button = wrapper.find('.add-song-button');

    expect(wrapper.state().addSong).toBe(false);

    button.simulate('click');

    expect(wrapper.state().addSong).toBe(true);
  });


});
