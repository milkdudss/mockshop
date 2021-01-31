import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import React from 'react'
import store from "../store"
import ProductsContainer from './CategoriesListReact'




function App() {
  return (
  <Provider store={store}>
  
    <ProductsContainer />
  
  </Provider>
    )
}

export default App;
