import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';
import local from '../../data/local';

describe('Menu', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Menu
      changeCategory={jest.fn()}
      data={local}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
