import {ADD_CART} from "./types"
export const addtocart=(payload)=>{
    return{
        type:ADD_CART,
        payload:payload
    }
}