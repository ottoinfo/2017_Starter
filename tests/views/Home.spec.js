import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Home from 'views/Home';
import styles from 'views/Home/Home.scss';

describe('(View) Home', () => {
    it('should exist', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.props().className).to.equal(styles.Home);
    });
});
