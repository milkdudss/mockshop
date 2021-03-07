import { SET_CATEGORY, SET_PRODUCTID, GO_HOME, SEARCH_STRING, CLEAR_SEARCH, SET_PRODUCTID_FROM_OVERLAY } from "../actions/appActions"

const initialState = { activePage: 'Home',selectedCategoryName: [], selectedProductID: [], inputedString: '', }

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GO_HOME:
            return  initialState;
        case SET_CATEGORY:
            return {
                ...state,
                selectedCategoryName: action.selectedCategoryName,
                activePage: "CategoryPage",
            };
        case SET_PRODUCTID:
            return {
                ...state,
                selectedProductID: action.selectedProductID,
                activePage: "ProductPage",
            };
        case SEARCH_STRING:
            return {
                ...state,
                inputedString: action.inputedString,
            };
        case CLEAR_SEARCH:
            return {
                ...state,
                inputedString: initialState.inputedString,    
            };
        case SET_PRODUCTID_FROM_OVERLAY:
            return {
                ...state,
                selectedProductID: action.selectedProductID,
                activePage: "ProductPage",
                inputedString: initialState.inputedString,
            
            };
            default: 
             return state;
    }  
}

export default appReducer