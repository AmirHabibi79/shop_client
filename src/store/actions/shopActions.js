import {SET_ITEMS} from "./types"
export const setItems=(payload)=>{
    return{
        type:SET_ITEMS,
        payload:payload
    }
}