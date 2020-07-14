import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils';
import { Products } from './Products';

const loadingProps = {
    isLoading: true
}
const successProps = {
    products: [
        {'title':'test1', 'count':1},
        {'title':'test2', 'count':1},
    ],
    isLoading: false
}

const productsNum = successProps.products.length;

const loadingSetup = (props=loadingProps) => {
    const component = shallow(<Products {...props} />);
    return component;
};

const setup = (props=successProps) => {
    const component = shallow(<Products {...props} />);
    return component;
};

describe('Prodcuts Component wiht loading status ', () => {

    let component;
    beforeEach(() => {
        component = loadingSetup();
    })

    it('Should render spinner component without error', () => {           
        const wrapper = findByTestAttr(component,'spinner')
        expect(wrapper.length).toBe(1);
    });

})

describe('Prodcuts Component after loading status ', () => {

    let component;
    beforeEach(() => {
        component = setup();
    })

    it('Should render component without error', () => {           
        const wrapper = findByTestAttr(component,'products')
        expect(wrapper.length).toBe(1);
    });

    it('Should render productDetail component without error', () => {           
        const wrapper = findByTestAttr(component,'detail')
        expect(wrapper.length).toBe(productsNum);
    });

})
