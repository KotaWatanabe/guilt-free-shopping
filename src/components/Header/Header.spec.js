import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestAttr } from '../../../utils/index'

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

const loginUserProps = {
    currentUser:'test'
}

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

    it('Should render a register button', () => {    
        const registration = findByTestAttr(component,'registration')
        expect(registration.length).toBe(1);
    })

    it('Should render a login button', () => {    
        const login = findByTestAttr(component,'login')
        expect(login.length).toBe(1);
    })
});

describe('Header for login user',() => {
    let component;
    beforeEach(() => {
        component = setUp({...loginUserProps});
    })

    it('Should render a logout button', () => {    
        const logout = findByTestAttr(component,'logout')
        expect(logout.length).toBe(1);
    })
})

