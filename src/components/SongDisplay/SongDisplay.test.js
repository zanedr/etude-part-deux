import React from 'react';
import { shallow, mount } from 'enzyme';

import { SongDisplay } from './SongDisplay';
import { mockSongs } from '../../../mock-data/songs';

describe('SongDisplay', () => {
  it('should render a section with an id of songs-container', () => {
    const wrapper = shallow(<SongDisplay songs={mockSongs} select={jest.fn()} />);

    expect(wrapper.find('#songs-container').length).toBe(1);
  });

  it('should receive props and render the appropriate number of SongCards', () => {
    const wrapper = shallow(<SongDisplay songs={mockSongs} select={jest.fn()} />);

    expect(wrapper.find('SongCard').length).toBe(5);
  });
});
