import React, { Component } from 'react'
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
        count
    }
}) => {
    // const count = cartItems.forEach(item => {
    //     if(item.id === product.id) {
    //         return item.count
    //     }
    // })
    // console.log(count);
    
    return (
        <div className="card">
            <img src={img} alt=""/>
            <div className="content">
                <h1>{title}</h1>
                <p>{info}</p>
                <p><strong>Price:</strong> ${price}</p>
                    <Button onClick={() => addToCart(cartItems, product)}>Add To Cart <span className="count">{count}</span> </Button>
            </div>
        </div>
    )
}





const mapStateToProps = state => ({
    products: state.products.products,
    cartItems: state.cart.items
})

export default connect(mapStateToProps,{ addToCart })(ProductDetail);
