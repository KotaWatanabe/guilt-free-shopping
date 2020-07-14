import React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils';

export const Header = ({ cartItems, currentUser }) => {
    const totalItems = cartItems.reduce((a, c) => a + c.count, 0)
    return (
        <header className="header" data-test="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/" data-test="logo" >GUILT FREE</Link>
                </div>
                <div className="navMenus">
                    {currentUser && (
                        <ul>
                            <li>
                                <Link to="/products" data-test="products">
                                    <span className="hide-sm">PRODUCTS</span>    
                                    <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                                </Link>
                            </li>
                            <li>
                                <span onClick={() => auth.signOut()}>
                                    <Link to="/" data-test="logout" >
                                        <span className="hide-sm">LOGOUT</span> 
                                        <i class="fas fa-sign-out-alt"></i> 
                                    </Link>
                                </span>
                            </li>
                            <li>
                                <button className="cartBtn">
                                    <Link to="/cart" data-test="myCart">
                                        <i className="fas fa-cart-plus" />
                                            <span className="mycart">my cart</span> 
                                        <span className="count">{totalItems}</span>
                                    </Link>
                                </button>
                            </li>
                        </ul>
                    )}

                    {!currentUser && (
                        <ul>
                            <li>
                                <Link to="/registration" data-test="registration">
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" data-test="login">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    )}

                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    currentUser: null
}

const mapStateToProps = state => ({
    cartItems: state.cart.items,
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps,{})(Header)

