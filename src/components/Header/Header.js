import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom'

const Header = props => {
    return (
        <header className="header" data-test="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/" data-test="logo" >GUILT FREE</Link>
                </div>
                <div className="navMenus">
                    <ul>
                        <li>
                            <Link to="/registration">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header

