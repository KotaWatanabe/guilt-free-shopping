import products from './products';
import {
    GET_PRODUCTS,
    FILTER_PRODUCTS_BY_CATEGORY,
    ORDER_PRODUCTS_BY_PRICE,
} from '../actions/types'
import moxios from 'moxios';
const initialState = {
    products:[],
    filteredProducts:[],
    category:'',
    isLoading: true,
}

describe('Produts Reducer', () => {
    it('should return default state', () => {
        const state = products(initialState, {});
        expect(state).toEqual(initialState);
    })

    it('should fetch data', () => {
        beforeEach(() => {
            moxios.install();
        });
    
        afterEach(() => {
            moxios.uninstall();
        });

        const expectedState = [{
            title: 'Example title 1',
            body: 'Some Text'
        },{
            title: 'Example title 2',
            body: 'Some Text'
        },{
            title: 'Example title 3',
            body: 'Some Text'
        }];

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
            const newState = response
            expect(newState).toBe(expectedState)
        });
    })
        
    it('Should return new new product', () => {
        const mockProducts = ['test1','test2','test3'];
        const newState = products(undefined, {
            type:GET_PRODUCTS,
            payload: mockProducts
        })
        const expectedProducts = {
            "products": mockProducts,
            "filteredProducts": mockProducts,
            "isLoading": false,
            "category":''
        }
        expect(newState).toEqual(expectedProducts)
    })

    it('Should sort by price', () => {
        const defaultProducts = [
            {'title': 'test1','price':3},
            {'title': 'test2','price':5},
            {'title': 'test3','price':1},
        ]
        const newState = products(undefined, {
            type:ORDER_PRODUCTS_BY_PRICE,
            payload: {
                products:defaultProducts,
                sort:"lowestprice"
            } 
        })
        const expectedProducts = {
            "filteredProducts": defaultProducts,
            "isLoading": true,
            "sort":"lowestprice",
            "category":'',
            "products":[],
        }
        expect(newState).toEqual(expectedProducts)
    })

    // it('should sort by price', () => {

    //     const sort = "lowestprice"
    //     const newState = products(undefined, {
    //         type:GET_PRODUCTS,
    //         payload: {
    //             sort,
    //             deafaultProducts
    //         }
    //     })
        
    //     const expectedOrder = [
    //         {'title': 'test3','price':1},
    //         {'title': 'test1','price':3},
    //         {'title': 'test2','price':5}
    //     ]

    //     const expectedProducts = {
    //         // "products": expectedOrder,
    //         "filteredProducts": expectedOrder,
    //         "isLoading": false,
    //         // "category":'',
    //         "sort":sort
    //     }
    //     expect(newState).toEqual(expectedProducts)
    // })
})
