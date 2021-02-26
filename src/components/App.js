
import React, { useEffect } from 'react'

import ProductsContainer from './CategoriesListReact'
import SelectedCategoryContainer from './SelectedCategory'
import SelectedProductContainer from './SelectedProduct'

import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/productsAction'




function App() {
  const dispatch = useDispatch()
  
  useEffect(() => dispatch(fetchProducts()), [dispatch]);
  const selectedCategory  = useSelector(state => state.app.selectedCategoryName);
  const selectedProductID = useSelector(state => state.app.selectedProductName);
  const activePage = useSelector(state => state.app.activePage)
  
  return (
  
  <div>
    {activePage === 'ProductPage' ? (
      <SelectedProductContainer selectedProductID={selectedProductID} />
    ) : activePage === 'CategoryPage' ? (
      <SelectedCategoryContainer selectedCategory={selectedCategory} />
    ) : (
      <ProductsContainer />
  
    )}
  </div>
    );
}


export default App;
