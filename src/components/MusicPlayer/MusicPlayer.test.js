import React from 'react';
import { shallow, mount } from 'enzyme';

import MusicPlayer from './MusicPlayer';

const initialState = {
  url: '',
  playing: false,
  controls: false,
  volume: 1,
  playbackRate: 1,
  timestamp: '0:0'
}

describe('MusicPlayer', () => {
  it('should render a section with a classname of music-player', () => {
    const wrapper = shallow(<MusicPlayer audioUrl={''}/>);

    expect(wrapper.find('.music-player').length).toBe(1);
  });

  it('should begin with default values in state', () => {
    const wrapper = shallow(<MusicPlayer audioUrl={''}/>);

    expect(wrapper.state()).toEqual(initialState);
  });

  it('should play a song on click of play button', () => {
    const wrapper = shallow(<MusicPlayer audioUrl={'mockUrl'}/>);
    const playBtn = wrapper.find('.play-button');
    wrapper.state().timestamp = '';

    playBtn.simulate('click');

    expect(wrapper.state().playing).toBe(true);
  });

  it('should pause a song if it is playing', () => {
    const wrapper = shallow(<MusicPlayer audioUrl={'mockUrl'}/>);
    const playBtn = wrapper.find('.play-button');
    wrapper.state().timestamp = '';

    playBtn.simulate('click');

    expect(wrapper.state().playing).toBe(true);

    playBtn.simulate('click');

    expect(wrapper.state().playing).toBe(false);
  });

  it('should adjust the playback rate of a song', () => {
    const wrapper = shallow(<MusicPlayer />);
    const input = wrapper.find('.playbackRate-input');

    expect(wrapper.state().playbackRate).toBe(1);

    input.simulate('change', {target: {value: 1.1}});

    expect(wrapper.state().playbackRate).toBe(1.1);
  });

  it('should seek to a specific timestamp', () => {
    const wrapper = mount(<MusicPlayer />);
    const input = wrapper.find('.seek-to');

    expect(wrapper.state().timestamp).toBe('0:0');

    input.simulate('change', {target: {value: '1:30'}});

    expect(wrapper.state().timestamp).toBe('1:30');
  });

  it('should pull in a url from settings', () => {
    const wrapper = shallow(<MusicPlayer audioUrl={'mockUrl'}/>);

    expect(wrapper.state().url).toBe('mockUrl');
  });
});
