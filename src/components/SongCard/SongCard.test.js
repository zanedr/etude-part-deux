import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';

import { SongCard } from './SongCard';

const fakeSong = {
  id: 0,
  title: 'super jackpot',
  artist: 'pinball pros',
  timestamps: '',
  tab: '',
  audio: '',
  priority: 0
}

const fakeSong2 = {
  id: 0,
  title: 'super jackpot',
  artist: 'pinball pros',
  timestamps: '',
  tab: ['i', 'have', 'tabs', 'and', 'that', 'is', 'rad'],
  audio: 'djdkdjdldjdkdjdkdjdl',
  priority: 0
}

describe('SongCard', () => {
  it('should render a song', () => {
    const wrapper = shallow(<SongCard song={fakeSong}/>);
    expect(wrapper.find('.song').length).toBe(1);
  });

  it('should have the correct song title', () => {
    const wrapper = shallow(<SongCard song={fakeSong}/>);
    let currentSong = wrapper.find('.song')
    expect(currentSong.nodes[0].props.children[0].props.children[0].props.children[1]).toBe('super jackpot');
  })

  it('should have the correct song artist', () => {
    const wrapper = shallow(<SongCard song={fakeSong}/>);
    let currentSong = wrapper.find('.song')
    expect(currentSong.nodes[0].props.children[0].props.children[1].props.children[1]).toBe('pinball pros');
  })

  it('should display an x if it does not tabs', () => {
    const wrapper = shallow(<SongCard song={fakeSong}/>);
    let currentSong = wrapper.find('.song')
    expect(currentSong.nodes[0].props.children[1].props.children[0].props.children[0].props.className).toBe('negative');
  })

  it('should display an x if it does not audio', () => {
    const wrapper = shallow(<SongCard song={fakeSong}/>);
    let currentSong = wrapper.find('.song')
    expect(currentSong.nodes[0].props.children[1].props.children[1].props.children[0].props.className).toBe('negative');
  })

  it('should display an checkmark if it has tabs', () => {
    const wrapper = shallow(<SongCard song={fakeSong2}/>);
    let currentSong = wrapper.find('.song')
    expect(currentSong.nodes[0].props.children[1].props.children[0].props.children[0].props.className).toBe('affirmitive');
  })

  it('should display an checkmark if it has audio', () => {
    const wrapper = shallow(<SongCard song={fakeSong2}/>);
    let currentSong = wrapper.find('.song')
    expect(currentSong.nodes[0].props.children[1].props.children[1].props.children[0].props.className).toBe('affirmitive');
  })
});
