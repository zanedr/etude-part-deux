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
});
