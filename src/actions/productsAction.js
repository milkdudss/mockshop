import axios from 'axios'
import { GET_PRODUCTS_REQUEST,
        GET_PRODUCTS_SUCCESS,
        GET_PRODUCTS_FAILURE } from '../types'


export const getProductsRequest = () => {
    return {
        type: GET_PRODUCTS_REQUEST
    }
}

const getProductsSuccess = products => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: products
    }
}

const getProductsFailure = error => {
    return {
        type: GET_PRODUCTS_FAILURE,
        payload: error
    }
}



export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(getProductsRequest)
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            const products = response.data 
            dispatch(getProductsSuccess(products))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(getProductsFailure(errorMsg))
        })
    }

}