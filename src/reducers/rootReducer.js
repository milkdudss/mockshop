import { combineReducers } from 'redux'
import  productsReducer  from './productsReducer'
import appReducer from './appReducer'


const rootReducer = combineReducers({
    products: productsReducer,
    app: appReducer,
})

export default rootReducer 