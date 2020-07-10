import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/products';
import ProductDetail from '../ProductDetail/ProductDetail';
import Filter from '../../components/Filter/Filter'
import './styles.scss'

const Products = ({ getProducts, products, isLoading }) => {
    useEffect(() => {
        getProducts()
    },[getProducts])    
        return isLoading ? (<h1>Loading</h1>) : (
            <div className="products">
                <h1>Our Products</h1>
                <Filter />
                <div className="cards">
                    {products.map(product => (
                        <ProductDetail key={product.id} product={product} />
                    ))}
                </div>
            </div>
        )
}

const mapStateToProps = state => ({
    products: state.products.filteredProducts,
    isLoading: state.products.isLoading
})

export default connect(mapStateToProps,{getProducts})(Products)
