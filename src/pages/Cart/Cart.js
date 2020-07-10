import React from 'react'
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/cart';
import './styles.scss'

const Cart = ({ cartItems, removeFromCart }) => {
    const totalItems = cartItems.reduce((a, c) => a + c.count, 0)
    return (
        <div>
            {cartItems.length ===  0 ? (
                "Cart is empty"
            ) : (
                <div>
                    You have {totalItems} items in the cart. <hr />
                </div>
            )}
            {cartItems.length > 0 && (
            <div>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <b>{item.title}</b>
                            <button
                                onClick={() =>                                                                    
                                    removeFromCart(cartItems, item)
                                }
                            >
                                X
                            </button>
                            <br />
                            {item.count} X {item.price}
                        </li>
                    ))}
                </ul>

                <b>
                    Sum:{" "}
                    {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
                </b>
                <button
                    onClick={() => alert("Todo: Implement checkout page.")}
                    className="btn btn-primary"
                >
                    checkout
                </button>
            </div>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.items
})

export default connect(mapStateToProps,{ addToCart, removeFromCart})(Cart)
