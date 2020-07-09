import React, { Component } from 'react'
import { storeProducts } from '../../data';
import './styles.scss'

export default class Products extends Component {
    state={
        products: storeProducts
    };
    render() {
        console.log(this.state.products);
        
        return (
            <div className="products">
                <h1>Our Products</h1>
                <div className="wrap">
                </div>
            </div>
        )
    }
}

