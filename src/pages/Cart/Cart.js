import React from 'react'
import { connect } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../../actions/cart';
import Button from '../../components/Forms/Button/Button'
import PayPalButton from '../../components/PayPalButton/PayPalButton';
import './styles.scss'

const Cart = ({ cartItems, removeFromCart, addToCart, clearCart }) => {
    const totalItems = cartItems.reduce((a, c) => a + c.count, 0)
    const sum = cartItems.reduce((a, c) => a + c.price * c.count, 0)

    return (
        <div className="cartPage">
            {cartItems.length ===  0 ? (
                <h2 date-test="cartPageTitle">Cart is empty</h2> 
            ) : (
                <>
                    <h2 date-test="cartPageTitle">
                        You have {totalItems} items in the cart.
                    </h2>
                </>
            )}
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id} className="wrap" data-test="product-list">
                        <div className="content img">
                            <img src={item.img} alt=""/>
                        </div>
                        <span className="content title hide-sm">
                            <h3>NAME</h3>
                            <p>{item.title}</p>
                        </span>
                        <div className="content price">
                            <h3>PRICE</h3>
                            <p data-test="price"><span>$</span> {item.price}</p>
                        </div>
                        <div className="content quantity">
                            <h3>QUANTITY</h3>
                            <p className="quantityBtn">
                                <button onClick={() => removeFromCart(cartItems, item)} data-test="minusBtn">-</button>
                                <span data-test="productCount">{item.count}</span> 
                                <button onClick={() => addToCart(cartItems, item)} data-test="plusBtn">+</button>
                            </p>
                        </div>
                        <div className="content total hide-sm ">
                            <h3>TOTAL</h3>
                            <p data-test='totalPrice'>${item.count * item.price}</p>
                        </div>
                    </li>
                ))}
            </ul>

            {cartItems.length > 0 && 
                <div className="summery">
                    <h3 data-test='totalPrice'>Total: ${sum}</h3>
                    <PayPalButton 
                        sum={sum}
                        clearCart={clearCart}
                    
                    />
                    <Button style={{backgroundColor:'#ff9a9e'}}>Check Out</Button>
                    <Button onClick={() => clearCart()} style={{background:'#6991c7'}} data-test='clearBtn'>Clear Cart</Button>
                </div>
            }
        </div>

    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.items
})

export default connect(mapStateToProps,{ addToCart, removeFromCart, clearCart })(Cart)
