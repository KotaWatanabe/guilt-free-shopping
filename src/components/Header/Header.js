import React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils';

const Header = ({ cartItems, currentUser }) => {
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
                                <Link to="/products" data-test="products" >PRODUCTS</Link>
                            </li>
                            <li>
                                <span onClick={() => auth.signOut()} data-test="logout">
                                    <Link to="/" data-test="logout" >LOGOUT</Link>
                                </span>
                            </li>
                            <li>
                                <button className="cartBtn">
                                    <Link to="/cart">
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

