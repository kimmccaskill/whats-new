import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';
import local from '../../data/local';

describe('Menu', () => {
  let wrapper;
  const mockChangeCategory = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Menu
      changeCategory={mockChangeCategory}
      data={local}
    />);
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call updateArticlesShown when the button is clicked', () => {

  wrapper.find('button').at(0).simulate('click');

  expect(mockChangeCategory).toHaveBeenCalled();
  });

});
