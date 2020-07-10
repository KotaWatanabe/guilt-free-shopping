import React from 'react'
import './styles.scss';
import { Link } from 'react-router-dom';

const Homepage = ({ currentUser }) => {
    return (
        <section className="homepage" data-test="homepage">
            <div className="content">
                <h3>No more guilt for shopping</h3>
                <h1 data-test="title">GUILT FREE</h1>
                {!currentUser ? (<Link to="/login"><button data-test="ctaBtn">Shop now</button></Link>):
                    <Link to="/products"><button data-test="ctaBtn">Shop now</button></Link>
                }
            </div>
        </section>
    )
}

export default Homepage;
