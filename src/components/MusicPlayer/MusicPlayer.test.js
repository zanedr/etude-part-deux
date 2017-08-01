import React from 'react';
import { shallow, mount } from 'enzyme';

import MusicPlayer from './MusicPlayer';

const initialState = {
  url: '',
  playing: false,
  controls: false,
  volume: 1,
  playbackRate: 1,
  timestamp: ''
}

describe('MusicPlayer', () => {
  it('should render a section with a classname of music-player', () => {
    const wrapper = shallow(<MusicPlayer />);

    expect(wrapper.find('.music-player').length).toBe(1);
  });

  it('should begin with default values in state', () => {
    const wrapper = shallow(<MusicPlayer />);

    expect(wrapper.state()).toEqual(initialState);
  });

  it('should play a song on click of play button', () => {
    const wrapper = shallow(<MusicPlayer />);
    const playBtn = wrapper.find('.play-button');

    playBtn.simulate('click');

    expect(wrapper.state().playing).toBe(true);
  });

  it('should pause a song if it is playing', () => {
    const wrapper = shallow(<MusicPlayer />);
    const playBtn = wrapper.find('.play-button');

    playBtn.simulate('click');

    expect(wrapper.state().playing).toBe(true);

    playBtn.simulate('click');

    expect(wrapper.state().playing).toBe(false);
  });

  it('should speed up the playback of a song', () => {
    const wrapper = shallow(<MusicPlayer />);
    const speedUp = wrapper.find('.speed-up');

    expect(wrapper.state().playbackRate).toBe(1);

    speedUp.simulate('click');

    expect(wrapper.state().playbackRate).toBe(1.1);
  });

  it('should slow down the playback of a song', () => {
    const wrapper = shallow(<MusicPlayer />);
    const speedUp = wrapper.find('.speed-down');

    expect(wrapper.state().playbackRate).toBe(1);

    speedUp.simulate('click');

    expect(wrapper.state().playbackRate).toBe(0.9);
  });

  it('should seek to a specific timestamp', () => {
    const wrapper = mount(<MusicPlayer />);
    const input = wrapper.find('.seek-to');
    const submitBtn = wrapper.find('.submit-timestamp');

    expect(wrapper.state().timestamp).toBe('');

    input.simulate('change', {target: {value: '1:30'}});
    submitBtn.simulate('click');

    expect(wrapper.state().timestamp).toBe('1:30');
    expect(wrapper.state().playing).toBe(true);
  });
});
