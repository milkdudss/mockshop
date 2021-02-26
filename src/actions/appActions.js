export const SET_CATEGORY = "SET_CATEGORY"
export const SET_PRODUCT = "SET_PRODUCT"

export const setCategory = selectedCategoryName => ({
    
        type: SET_CATEGORY,
        selectedCategoryName,
    
});

export const setProduct = selectedProductName => ({

        type: SET_PRODUCT,
        selectedProductName,
})