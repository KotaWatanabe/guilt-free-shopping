import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from '../actions/types'

const initialState = {
    items:[]
}

export default function(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case ADD_TO_CART:
        return {
            ...state,
            items:payload
        }
        case REMOVE_FROM_CART:
        return {
            ...state,
            items:payload
        }
        case CLEAR_CART:
            return {
                ...state,
                items:payload
            }
        default:
        return state;

    }
}
