import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
} from './types';

export const addToCart = (products, item) => dispatch => {
    try {
        const cartItems = [...products]
        let productAlreadyInCart = false;
      
        cartItems.forEach((cp) => {
          if (cp.id === item.id) {
            cp.count += 1;
            productAlreadyInCart = true;
          }
        });
      
        if (!productAlreadyInCart) {
          cartItems.push({ ...item, count: 1 });
        }
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        dispatch({ 
            type: ADD_TO_CART, 
            payload: cartItems  
        });
    } catch (err) {
        console.log(err);
    }
}

export const removeFromCart = (products, item) => (dispatch) => {
    // let cartItems = [...products]
    // if(item.count = 1) {
    //     cartItems.filter(product => {
    //         return (
    //             product.id !== item.id
    //         )
    //     });
    // } else {
    //     item.count -= 1;
    // }
    const cartItems = products.slice().filter((a) => a.id !== item.id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ 
        type: REMOVE_FROM_CART, 
        payload: cartItems 
    });
  };
