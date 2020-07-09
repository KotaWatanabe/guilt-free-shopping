import React from 'react'
import './styles.scss';
import { Link } from 'react-router-dom';

const Homepage = props => {
    return (
        <section className="homepage" data-test="homepage">
            <div className="content">
                <h3>No more guilt for shopping</h3>
                <h1 data-test="title">GUILT FREE</h1>
                <button data-test="ctaBtn"><Link to="/products">Shop now</Link></button>
            </div>
        </section>
    )
}

export default Homepage;
