import React, { useEffect } from 'react'
import { render } from '@testing-library/react'
import store from "../store"
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/productsAction'

function ProductsContainer ({ productData, fetchProducts }) {
    useEffect(() => {
        fetchProducts()
    }, [])
    
    return productData.loading ? (
        <h2>loading</h2>
    ) : productData.error ? (
        <h2>{productData.error}</h2>
    ) : (
        <div>
            <h2>Product List</h2>
            <div>
                {productData.products.map(products => <p>{products.category}</p>)}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        productData: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)