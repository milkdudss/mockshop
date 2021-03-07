export const SET_CATEGORY = "SET_CATEGORY"
export const SET_PRODUCTID = "SET_PRODUCTID"
export const GO_HOME = "GO_HOME"
export const SEARCH_STRING = "SEARCH_STRING"
export const CLEAR_SEARCH = "CLEAR_SEARCH"
export const SET_PRODUCTID_FROM_OVERLAY = "SET_PRODUCTID_FROM_OVERLAY"

export const setCategory = selectedCategoryName => ({
    
        type: SET_CATEGORY,
        selectedCategoryName,
    
});

export const setProductID = selectedProductID => ({

        type: SET_PRODUCTID,
        selectedProductID,
})

export const  goHome = () => ({
        type: GO_HOME
});

export const searchString = inputedString => ({
        type: SEARCH_STRING,
        inputedString,
})

export const clearSearch = () => ({
        type: CLEAR_SEARCH
})

export const setProductIDFromOverlay = selectedProductID => ({

        type: SET_PRODUCTID_FROM_OVERLAY,
        selectedProductID,
})