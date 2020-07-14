import React from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart';
import Button from '../../components/Forms/Button/Button';
import './styles.scss'

const ProductDetail = ({
    cartItems,
    addToCart,
    product,
    product: {
        title,
        info,
        price,
        img,
        inCart
    }
}) => {
    return (
        <div className="detail" data-test="product-detail">
            <div className="card" data-test="card">
                <div className="card-inner">
                    <div className="card-front">
                        <img src={img} alt=""/>
                        <div className="content">
                            <h1 data-test="productTitle">{title}</h1>
                            <p><strong>Price:</strong> ${price}</p>
                         </div>
                    </div>
                    <div className="card-back">
                                <h1>{title}</h1>
                                <p>{info}</p>
                    </div>

                </div>

            </div>
            {!inCart ? (
                <Button onClick={() => addToCart(cartItems,product)}           
                        style={{background:'#ff9a9e'}}                         
                        data-test="addCartBtn">Add To Cart
                </Button>) : (
                (<Button style={{background:'#6991c7'}} data-test="addCartBtn">
                    Already in Cart
                </Button>)
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products.products,
    cartItems: state.cart.items
})

export default connect(mapStateToProps,{ addToCart })(ProductDetail);
