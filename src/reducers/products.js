import {
    GET_PRODUCTS,
    FILTER_PRODUCTS_BY_CATEGORY,
    ORDER_PRODUCTS_BY_PRICE,
} from '../actions/types'

const initialState = {
    products:[],
    filteredProducts:[],
    category:'',
    isLoading: true,
}

export default function(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case GET_PRODUCTS:
        return {
            ...state,
            products:payload,
            filteredProducts:payload,
            isLoading:false
        }
        case FILTER_PRODUCTS_BY_CATEGORY:
        return {
            ...state,
            filteredProducts:payload.products,
            category:payload.category,
            isLoading:false
        }
        case ORDER_PRODUCTS_BY_PRICE:
        return {
          ...state,
          filteredProducts: payload.products,
          sort: payload.sort,
        };
        default:
        return state;

    }
}
