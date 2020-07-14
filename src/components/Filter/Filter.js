import React from 'react'
import { connect } from 'react-redux';
import { filterProducts, sortProducts } from '../../actions/products'
import './styles.scss'

const Filter = ({ filterProducts, sortProducts, products, category, filteredProducts, sort}) => {
    return (
        <div className="filter-wrap">
        <div className="price-wrap" data-test="price-wrap">
          <label>
            Order by Price
            <select
              value={sort}
              onChange={(e) => {
                sortProducts(
                    filteredProducts,
                    e.target.value
                  );
              }}
            >
              <option value="">Select</option>
              <option value="lowestprice">Lowest to highest</option>
              <option value="highestprice">Highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="category-wrap" data-test="category-wrap">
          <label>
            Filter Category
            <select
              value={category}
              onChange={(event) => {
                filterProducts(
                  products,
                  event.target.value
                );
              }}
            >
              <option value="">ALL</option>
              <option value="BAG">BAG</option>
              <option value="WATCH">WATCH</option>
              <option value="GLASSES">GLASSES</option>
            </select>
          </label>
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    products:state.products.products,
    filteredProducts: state.products.filteredProducts,
    category:state.products.category,
    sort:state.products.sort
})

export default connect(mapStateToProps,{filterProducts, sortProducts})(Filter)

