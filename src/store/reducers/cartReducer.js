import {ADD_CART} from "../actions/types"
const shopReducer=(state={items:[],total:"0"},action)=>{
    switch(action.type){
        case ADD_CART:
            return addcart(action.payload,state)
        default:
            return state
    }
}
const addcart=(payload,state)=>{
    if(Object.keys(payload).includes("items")){
        return{items:[...payload.items],total:payload.total}
    }
    if(payload===undefined){
        return state
    }
    const {id,title,image,price,quantity,total}=payload
    const {items}=state
    if(Object.keys(payload).includes("message")){
        const newItems=items.filter(item=>{return item.id!==id})
        console.log(newItems)
        return{items:[...newItems],total:payload.total}
    }
    if(id===undefined){
        return state
    }
    if(items.length===0){
        if(Object.keys(payload).includes("items"))
        return{items:[...payload.items],total:total}
        else
        return{items:[payload],total:total}
    }
    else{
        
        const isin=items.filter(item=>{return item.id===id})
        if(isin.length>0){
            
            items.map(item=>{
                if(item.id===id)
                return item.quantity=quantity
                else
                return item
            })
            return{items:[...items],total:total}
        }
        else{
            
            items.push({id:id,title:title,image:image,price:price,quantity:quantity})
            return{items:[...items],total:total}
        }
    }
    
}
export default shopReducer