import React from 'react';
import { shallow } from 'enzyme';
import { Cart } from './Cart';
import { findByTestAttr } from '../../../utils/index'

const emptyProps = {
    cartItems: []
}
const mockProps = {
    cartItems: [
        {'title':'test1', 'count':1, 'price':100},
        {'title':'test2', 'count':1, 'price':50},
    ]
}

const totalItems = mockProps.cartItems.reduce((a, c) => a + c.count, 0)
const sum = mockProps.cartItems.reduce((a, c) => a + c.price * c.count, 0)

const emptySetup = (props=emptyProps) => {
    const component = shallow(<Cart {...props} />);
    return component;
};

const setup = (props=mockProps) => {
    const component = shallow(<Cart {...props} />);
    return component;
};

describe('Empty cart component', () => {

    let component;
    beforeEach(() => {
        component = emptySetup();
    })

    it('Should render empty component without error', () => {           
        const wrapper = findByTestAttr(component,'cartPage')
        expect(wrapper.length).toBe(1);
    });

    it('Should render empty cart with title', () => {           
        const element = findByTestAttr(component,'cartPageTitle')
        expect(element.text()).toEqual('Cart is empty');
    });

})

describe('Cart with products', () => {

    let component;
    beforeEach(() => {
        component = setup();
    })

    it('Should render component without error', () => {           
        const wrapper = findByTestAttr(component,'cartPage')
        expect(wrapper.length).toBe(1);
    });
    it('Should render component with correct products number', () => {           
        const element = findByTestAttr(component,'cartPageTitle')
        expect(element.text()).toEqual(`You have ${totalItems} items in the cart.`);
    });

})
