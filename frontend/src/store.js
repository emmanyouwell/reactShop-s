import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { productsReducer, productDetailsReducer, newProductReducer } from './reducers/productReducers'
import { authReducer, userReducer, forgotPasswordReducer  } from './reducers/userReducers';
const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    newProduct: newProductReducer,


})

let initialState = {

}

const middlware = [thunk]
const store = createStore(reducer, initialState, applyMiddleware(...middlware))

export default store;