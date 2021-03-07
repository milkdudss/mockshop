import { GET_PRODUCTS_FAILURE,
     GET_PRODUCTS_REQUEST,
      GET_PRODUCTS_SUCCESS } from "../types"

const initialState = {
    loading: true,
    category: [],
    productsById: [],
    fetchedProducts: [],
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
        
        let id = action.payload.reduce((r, a) => {
            r[a.id] = r[a.id] || [];
            r[a.id].push(a);
                return r;
                }, []);

        let A = action.payload;

        let fetchedProducts = A.map(x => x);
                
            return {
                ...state,
                loading: false,
                category: categories,
                productsById: id,
                fetchedProducts: fetchedProducts,
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