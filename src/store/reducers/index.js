import {combineReducers} from "redux"
import shopReducer from "./shopReducer"
import cartReducer from "./cartReducer"
const allReducers=combineReducers({
    shop:shopReducer,
    cart:cartReducer
});

export default allReducers