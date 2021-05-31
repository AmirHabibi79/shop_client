import { useEffect, useState } from "react"
import {useDispatch} from "react-redux"
import {addtocart} from "../store/actions/cartActions"
import {useSelector} from "react-redux"
import useFetch from "../hooks/useFetch"
import CartItem from "./cart_item"
import {URL} from "../defines"
import useClick from "../hooks/useClick"
import "../styles/cart.css"
const Cart=()=>{
    const dispatch=useDispatch()
    const data= useFetch(URL+"/cart")
    const {items,total}=useSelector(state=>state.cart)
    const isclicked=useClick(".cart","out")
    const [show,setShow]=useState(false)
    useEffect(()=>{
        if(isclicked)
        setShow(false)
    },[isclicked])
    
    useEffect(()=>{
        
        if(data!==undefined){
            
            dispatch(addtocart(data))
        }
    },[data])
    return(
        <div className="cart">
            <div className="cart-button">
                <button onClick={()=>setShow(!show)}>
                &#128722;
                </button>
                    <span>{items.length}</span>
            </div>
            <div className={show?"cart-wrapper sh":"cart-wrapper"}>
                <div className="cart-items">
                {items.length>0?items.map(item=>(
                    <CartItem key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} quantity={item.quantity}/>
                )):<h1>empty</h1>}
                </div>
                <span className="total">{"مبلغ کل: "+total}</span>
            </div>
        </div>
    )
}

export default Cart;
