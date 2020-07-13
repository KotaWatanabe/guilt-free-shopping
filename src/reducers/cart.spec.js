import cart from './cart';
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from '../actions/types'

const initialState = {
    items:[]
}
describe('Cart Reducer', () => {

    it('Should return default state', () => {
        const newState = cart(undefined, {});
        expect(newState).toEqual(initialState);
    });

    it('Should add new item to cart', () => {
        const newItem = {'title':'test1','price':100}

        const newState = cart(undefined, {
            type:ADD_TO_CART,
            payload: newItem
        })

        const expectedState = {
            items:newItem
        }
        expect(newState).toEqual(expectedState)
    });

    it('Should remove item from cart', () => {
        const defaultItems = {
            items:[{
                'title':'test1','price':100,
                'title':'test2','price':200
            }]
        } 

        const removedItems = {
            items:[{
                'title':'test1','price':100,
            }]
        } 

        const newState = cart(defaultItems, {
            type:REMOVE_FROM_CART,
            payload: removedItems
        })

        const expectedState = {
            items:removedItems
        }

        expect(newState).toEqual(expectedState)
    });

    it('Should clear cart', () => {
        const defaultItems = {
            items:[{
                'title':'test1','price':100,
                'title':'test2','price':200
            }]
        } 

        const newState = cart(defaultItems, {
            type:CLEAR_CART,
            payload: []
        })

        const expectedState = {
            items:[]
        }
        expect(newState).toEqual(expectedState)
    });
});
