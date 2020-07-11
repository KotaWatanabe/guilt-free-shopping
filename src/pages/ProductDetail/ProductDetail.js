import React, { Component } from 'react'
import ProductInfo from '../ProductInfo/ProductInfo';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart';
import Button from '../../components/Forms/Button/Button';
import './styles.scss'

const ProductDetail = ({
    cartItems,
    addToCart,
    product,
    product: {
        id,
        title,
        info,
        price,
        img,
        inCart
    }
}) => {
    return (
        <div className="detail">
            <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                        <img src={img} alt=""/>
                        <div className="content">
                            <h1>{title}</h1>
                            <p><strong>Price:</strong> ${price}</p>
                         </div>
                    </div>
                    <div className="card-back">
                                <h1>{title}</h1>
                                <p>{info}</p>
                    </div>

                </div>

            </div>
            {!inCart ? (<Button onClick={() => addToCart(cartItems,product)} style={{background:'#ff9a9e'}}>Add To Cart</Button>) : ((<Button style={{background:'#6991c7'}}>Already in Cart</Button>)
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products.products,
    cartItems: state.cart.items
})

export default connect(mapStateToProps,{ addToCart })(ProductDetail);
