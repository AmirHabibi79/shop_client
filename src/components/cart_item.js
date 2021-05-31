import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import {addtocart} from "../store/actions/cartActions"
import {URL} from "../defines"
import "../styles/cart-item.css"
const CartItem=({title,image,price,quantity,id})=>{
    const dispatch=useDispatch();
    const addcard=(id)=>{
        fetch(URL+"/addtocart/"+id,{
            credentials:"include"
        })
        .then(res=>res.json())
        .then(result=>dispatch(addtocart(result)))
        .catch(err=>console.log(err))
    }
    const removecard=(id)=>{
        fetch(URL+"/removecart/"+id,{
            credentials:"include"
        })
        .then(res=>res.json())
        .then(result=>dispatch(addtocart(result)))
        .catch(err=>console.log(err))
    }
    return(
       
        <div className="cart-item">
            <img src={image} alt={title}/>
            <Link to={"/"+id}>{title?title.substr(0,10)+"...":""}</Link>
            <span className="price">{price}</span>
            <div className="quantity">
            <button onClick={()=>addcard(id)}>&lt;</button>
            <span>{quantity}</span>
            <button onClick={()=>removecard(id)}>&gt;</button>
            </div>
            
        </div>
        
    )
}

export default CartItem