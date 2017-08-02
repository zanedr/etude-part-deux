import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';

import { SongCard } from './SongCard';

describe('SongCard', () => {
  it('should render a song', () => {
    const wrapper = shallow(<SongCard />);
  });
)}
