import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  const mockFilterArticles = jest.fn();
  beforeEach(() => {

    wrapper = shallow(<SearchForm filterArticles={mockFilterArticles}/>);
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state of no ideas', () => {
  expect(wrapper.state('searchInput')).toEqual('')
  });

  it('should update state with updateChange method', () => {
  const mockEvent = {
    target: {
      value: 'birdcall'
    }
  }

  wrapper.instance().updateChange(mockEvent);

  expect(wrapper.state('searchInput')).toEqual('birdcall');
  });
});
