import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './Homepage';
import { findByTestAttr } from '../../../utils/index'

const setUp = (props={}) => {
    const component = shallow(<Homepage {...props} />);
    return component;
};

describe('Homepage component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('Should render without error', () => {           
        const wrapper = findByTestAttr(component,'homepage')
        expect(wrapper.length).toBe(1);
    });

    it('Should render a title', () => {    
        const title = findByTestAttr(component,'title')
        expect(title.length).toBe(1);
    })
    it('Should render a CTA button', () => {    
        const ctaBtn = findByTestAttr(component,'ctaBtn')
        expect(ctaBtn.length).toBe(1);
    })
})
