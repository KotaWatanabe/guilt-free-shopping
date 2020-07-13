import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/products';
import ProductDetail from '../ProductDetail/ProductDetail';
import Filter from '../../components/Filter/Filter'
import Spinner from '../../components/Spinner/Spinner';
import './styles.scss'

const Products = ({ getProducts, products, isLoading }) => {
    useEffect(() => {
        getProducts()
    },[])    
        return isLoading ? (<Spinner data-test="spinner"/>) : (
            <div className="products" data-test="products">
                <h1 data-test='title'>Our Products</h1>
                <Filter />
                <div className="cards" data-test='cards'>
                    {products.map(product => (
                        <ProductDetail data-test='detail' key={product.id} product={product} />
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
