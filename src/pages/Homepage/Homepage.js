import React from 'react'
import './styles.scss';

const Homepage = props => {
    return (
        <section className="homepage" data-test="homepage">
            <div className="content">
                <h3>No more guilt for shopping</h3>
                <h1 data-test="title">GUILT FREE</h1>
                <button data-test="ctaBtn"><a href="">Shop now</a></button>
            </div>
        </section>
    )
}

export default Homepage;
