import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';

import { AddSong } from './AddSong';

describe('AddSong', () => {
  it('should render a section with a classname of addSong-container', () => {
    const wrapper = shallow(<AddSong />);

    expect(wrapper.find('.addSong-container').length).toBe(1);
  });

  it('should begin with default values in state', () => {
    const wrapper = shallow(<AddSong />);
    const initialState = {
      id: 0,
      title: '',
      artist: '',
      timestamps: '',
      tab: '',
      audio: '',
      priority: 0
    }

    expect(wrapper.state()).toEqual(initialState);
  });

  it('should update title in state on change', () => {
    const wrapper = shallow(<AddSong />);
    const input = wrapper.find('.addSong-title');

    expect(wrapper.state().title).toBe('');

    input.simulate('change', {target: {value: 'newTitle'}});

    expect(wrapper.state().title).toBe('newTitle');
  });

  it('should update artist in state on change', () => {
    const wrapper = shallow(<AddSong />);
    const input = wrapper.find('.addSong-artist');

    expect(wrapper.state().artist).toBe('');

    input.simulate('change', {target: {value: 'newArtist'}});

    expect(wrapper.state().artist).toBe('newArtist');
  });

  it('should update tab in state on change', () => {
    const wrapper = shallow(<AddSong />);
    const input = wrapper.find('.addSong-tab');

    expect(wrapper.state().tab).toBe('');

    input.simulate('change', {target: {value: 'newTab'}});

    expect(wrapper.state().tab).toBe('newTab');
  });

  it('should update audio in state on change', () => {
    const wrapper = shallow(<AddSong />);
    const input = wrapper.find('.addSong-audio');

    expect(wrapper.state().audio).toBe('');

    input.simulate('change', {target: {value: 'newAudio'}});

    expect(wrapper.state().audio).toBe('newAudio');
  });

  it('should update priority in state on change', () => {
    const wrapper = shallow(<AddSong />);
    const input = wrapper.find('.addSong-priority');

    expect(wrapper.state().priority).toBe(0);

    input.simulate('change', {target: {value: 1}});

    expect(wrapper.state().priority).toBe(1);
  });

  it('should add a song on click', () => {
    const wrapper = shallow(<AddSong />);
    const mockFn = jest.fn();
    const button = wrapper.find('.save-addSong');
    fetch = jest.fn(() => new Promise(resolve => resolve()));

    button.simulate('click', {
      saveAddSong: mockFn,
    });

    expect(mockFn).toHaveBeenCalledTimes(1);

  })
});
