import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { findByTestAttr } from '../../../utils/index'

const setUp = (props={}) => {
    const component = shallow(<Footer {...props} />);
    return component;
};

describe('Footer component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('Should render without error', () => {    
        const wrapper = findByTestAttr(component,'footer')
        expect(wrapper.length).toBe(1);
    });

    it('Should render a copyright', () => {    
        const copyright = findByTestAttr(component,'copyright')
        expect(copyright.length).toBe(1);
    })
})
