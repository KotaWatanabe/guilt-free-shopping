import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils';

const Header = props => {
    const { currentUser } = props;
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
                                <span onClick={() => auth.signOut()} data-test="logout">
                                    Logout
                                </span>
                            </li>
                            <li>
                                <button className="cartBtn">
                                    <Link to="/cart">
                                        <i className="fas fa-cart-plus" />
                                        my cart
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

export default Header

