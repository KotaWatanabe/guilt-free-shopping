import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../utils'
import { App } from './App';

const setUp = (props={}) => {
    const component = shallow(<App {...props} />);
    return component;
};

describe('Homepage component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('Should render without error', () => {           
        const wrapper = findByTestAttr(component,'appComponent')
        expect(wrapper.length).toBe(1);
    });

})
