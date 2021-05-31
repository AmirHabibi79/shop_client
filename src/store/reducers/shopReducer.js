import {SET_ITEMS,GET_ITEMS} from "../actions/types"
const shopReducer=(state=[],action)=>{
    switch(action.type){
        case SET_ITEMS:
            return action.payload!==undefined?[...action.payload]:[]
        case GET_ITEMS:
            return state
        default:
            return state
    }
}
export default shopReducer