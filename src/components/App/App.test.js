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
});
