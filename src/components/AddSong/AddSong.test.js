import React from 'react';
import { shallow, mount } from 'enzyme';

import { AddSong } from './AddSong';

describe('AddSong', () => {
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
});
