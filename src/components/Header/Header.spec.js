import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils';
import { Header } from './Header';

const nonLoggedinProps = {
    cartItems: [
        {'title':'test1', 'count':1},
        {'title':'test2', 'count':1},
    ]
}
const loggedinProps = {
    cartItems: [
        {'title':'test1', 'count':1},
        {'title':'test2', 'count':1},
    ],
    currentUser: [
        {'name':'test1'}
    ]
}

const setUpNonLoggedInUser = (props=nonLoggedinProps) => {
    const component = shallow(<Header {...props} />);
    return component;
};

const setUpLoggedInUser = (props=loggedinProps) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header for non logged-in user', () => {

    let component;
    beforeEach(() => {
        component = setUpNonLoggedInUser();
    })

    it('Should render without error', () => {           
        const wrapper = findByTestAttr(component,'header')
        expect(wrapper.length).toBe(1);
    });

    it('Should render registration link', () => {           
        const wrapper = findByTestAttr(component,'registration')
        expect(wrapper.length).toBe(1);
    });

    it('Should render login link', () => {           
        const wrapper = findByTestAttr(component,'login')
        expect(wrapper.length).toBe(1);
    });

})

describe('Header for loggedIn user',() => {
    let component;
    beforeEach(() => {
        component = setUpLoggedInUser();
    })

    it('Should render without error', () => {           
        const wrapper = findByTestAttr(component,'header')
        expect(wrapper.length).toBe(1);
    });

    it('Should render products link', () => {           
        const wrapper = findByTestAttr(component,'products')
        expect(wrapper.length).toBe(1);
    });

    it('Should render logout link', () => {           
        const wrapper = findByTestAttr(component,'logout')
        expect(wrapper.length).toBe(1);
    });

    it('Should render myCart link', () => {           
        const wrapper = findByTestAttr(component,'myCart')
        expect(wrapper.length).toBe(1);
    });
})
