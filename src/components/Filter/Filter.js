import React from 'react'
import { connect } from 'react-redux';
import { filterProducts, sortProducts } from '../../actions/products'

const Filter = ({ filterProducts, sortProducts, products, category, filteredProducts, sort}) => {
    return (
        <div className="row">
        <div className="col-md-4">{`${filteredProducts.length} products found.`}</div>
        <div className="col-md-4">
          <label>
            Order by
            <select
              className="form-control"
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
        <div className="col-md-4">
          <label>
            {" "}
            Filter Category
            <select
              className="form-control"
              value={category}
              onChange={(event) => {
                filterProducts(
                  products,
                  event.target.value
                );
              }}
            >
              <option value="">ALL</option>
              <option value="BAG">Bag</option>
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

