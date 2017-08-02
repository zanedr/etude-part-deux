import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';

import PracticeDisplay from './PracticeDisplay';


describe('PracticeDisplay', () => {
  it('should render a practice container', () => {
    const wrapper = shallow(<PracticeDisplay selectedSong={{tab: ''}} />);
    expect(wrapper.find('.practice-container').length).toBe(1);
  });

  it('should initially have state that has a settings value of false', () => {
    const wrapper = shallow(<PracticeDisplay selectedSong={{tab: ''}} />);
    expect(wrapper.state().settings).toEqual(false)
  });

  it('should render Settings if the state has a settings value of true', () => {
    const wrapper = mount(<PracticeDisplay selectedSong={{tab: ''}} />);
    wrapper.setState({settings: true});
    expect(wrapper.state().settings).toEqual(true);
    expect(wrapper.find('.settings-container').length).toBe(1);
  });

  it('should render a Music Player', () => {
    const wrapper = mount(<PracticeDisplay selectedSong={{tab: ''}} />);
    expect(wrapper.find('.music-player').length).toBe(1);
  })

  it('should render controls', () => {
    const wrapper = mount(<PracticeDisplay selectedSong={{tab: ''}} />);
    expect(wrapper.find('.controls').length).toBe(1);
  })

  it('should not render song tabs if unavailable', () => {
    const wrapper = mount(<PracticeDisplay selectedSong={{tab: ''}} />);

    expect(wrapper.find('.tab-line').length).toBe(1);
  })

  it('should render song tabs if available', () => {
    const wrapper = mount(<PracticeDisplay selectedSong={{tab: '["these", "are", "my", "tabs"]'}} />);

    expect(wrapper.find('.tab-line').length).toBe(4);
  })
});
