import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';
import local from '../../data/local';

describe('NewsArticle', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<NewsArticle
      key='123'
      image='https://i0.wp.com/wp-cpr.s3.amazonaws.com/uploads/2019/09/cpr-swolf_black-cube-monumental_DSC8170.jpg?resize=2064,1376'
      headline="Jimmy trapped in well"
      description="Boy named Jimmy well down well.  Found by dog."
      url='https://www.cpr.org/2019/09/27/giant-chicken-skeleton-in-denvers-central-library-stands-for-more-than-just-dinner/'
    />);

    expect(wrapper).toMatchSnapshot();
  });

  
});
