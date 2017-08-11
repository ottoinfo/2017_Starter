import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SideNav from 'components/SideNav';
import styles from 'components/SideNav/SideNav.scss';

describe('(Component) SideNav', () => {
    it('should exist', () => {
        const wrapper = shallow(<SideNav />);
        expect(wrapper.props().className).toContain(styles.SideNav);
    });
});
