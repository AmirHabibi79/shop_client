import {useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import useFetch from "../hooks/useFetch"
import {URL} from "../defines"
import {setItems} from "../store/actions/shopActions"
import ShopItem from "../components/shop_item"
import "../styles/shop.css"
const Shop=()=>{
    const dispatch=useDispatch();
    const data=useFetch(URL+"/products")
    const items=useSelector(state=>state.shop)
    useEffect(()=>{
        dispatch(setItems(data))
    },[data])
    return(
        <div className="shop">
            {items.length>0?
                items.map(item=>(
                    <ShopItem key={item._id} title={item.title} price={item.price} image={item.image} rate={item.rate} _id={item._id}/>
                ))
                :""
            }
        </div>
    )
}

export default Shop