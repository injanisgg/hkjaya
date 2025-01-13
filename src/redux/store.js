import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoryReducers, productReducers } from "./reducers";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    products: productReducers,
    categories: categoryReducers
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;