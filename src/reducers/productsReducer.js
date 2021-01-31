import { GET_PRODUCTS_FAILURE,
     GET_PRODUCTS_REQUEST,
      GET_PRODUCTS_SUCCESS } from "../types"

const initialState = {
    loading: false,
    category: [],
    error: ''
}



const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCTS_SUCCESS:
            
            
        let categories = action.payload.reduce((r, a) => {  
            r[a.category] = r[a.category] || [];
            r[a.category].push(a);
                return r; 
                }, []);
                console.log(Object.keys(categories))
            return {
                ...state,
                loading: false,
                category: categories,
                error: ''
            }
        case GET_PRODUCTS_FAILURE:
            return {
                loading: false,
                category: [],
                error: action.payload
            }
        default: return state
    }
}

export default productsReducer