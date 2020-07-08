import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestAttr } from '../../../utils/index'

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('Should render without error', () => {    
        const wrapper = findByTestAttr(component,'header')
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {    
        const logo = findByTestAttr(component,'logo')
        expect(logo.length).toBe(1);
    })
})
