import {
    SET_CURRENT_USER,
} from './types';

export const setCurrentUser = user => dispatch => {
    try {
        dispatch({ 
            type: SET_CURRENT_USER, 
            payload: user  
        });
    } catch (err) {
        console.log(err);
    }
}

// export const removeFromCart = (products, item) => (dispatch) => {
//     const cartItems = products.slice();
//     const index = cartItems.indexOf(item);
//     item.count !== 1 ? item.count--  : cartItems.splice(index, 1);
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     dispatch({ 
//         type: REMOVE_FROM_CART, 
//         payload: cartItems 
//     });
//   };
