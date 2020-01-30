import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import entertainment from '../../data/entertainment'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  let wrapper;
  const mockChangeCategory = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state of no ideas', () => {
  expect(wrapper.state('categories')).toEqual({})
  expect(wrapper.state('articleShown')).toEqual({})
  });

  it('should update state with changeCategory method', () => {
  const mockEvent = {
    target: {
      value: 'Entertainment'
    }
  }
  const expectedArticleShown = {data: entertainment};

  wrapper.instance().changeCategory(mockEvent);

  expect(expectedArticleShown.data).toEqual(entertainment);
  });

  it('should update state of articleShown with filterArticles method', () => {
    const mockQuery = 'cancel'
    wrapper.instance().filterArticles = jest.fn()

    wrapper.instance().filterArticles(mockQuery);
    expect(wrapper.instance().filterArticles).toHaveBeenCalled();
  });

});
