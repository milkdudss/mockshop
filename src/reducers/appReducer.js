import { SET_CATEGORY, SET_PRODUCT } from "../actions/appActions"



const appReducer = (state = {activePage: 'Home',}, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                selectedCategoryName: action.selectedCategoryName,
                activePage: "CategoryPage",
            };
        case SET_PRODUCT:
            return {
                ...state,
                selectedProductName: action.selectedProductName,
                activePage: "ProductPage",
            };
            default: 
             return state;
    }  
}

export default appReducer