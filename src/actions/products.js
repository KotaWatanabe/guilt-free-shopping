import axios from 'axios';
import {
    GET_RPODUCTS,
    FILTER_PRODUCTS_BY_CATEGORY,
    ORDER_PRODUCTS_BY_PRICE
} from './types';

export const getProducts = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:8000/products/')
        dispatch({
            type:GET_RPODUCTS,
            payload:res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const filterProducts = (products, category) => async dispatch => {
    
    try {
        dispatch({
            type:FILTER_PRODUCTS_BY_CATEGORY,
            payload:{
                category,
                products: category === '' ? products :
                    products.filter(product => product.category === category)
            }
        });
    } catch (err) {
        console.log(err);
    }
}

export const sortProducts = (items, sort) => async dispatch => {
    const products = [...items];
    if (sort !== "") {
      products.sort((a, b) =>
        (sort === "lowestprice") ? 
        (a.price > b.price ? 1 : -1)
        : (a.price < b.price ? 1 : -1)
      );
    } else {
      products.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
    try {
        dispatch({
            type:ORDER_PRODUCTS_BY_PRICE,
            payload:{
                sort,
                products
            }
        });
    } catch (err) {
        console.log(err);
    }
}
