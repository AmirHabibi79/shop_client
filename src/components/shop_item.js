import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import {URL} from "../defines"
import {addtocart} from "../store/actions/cartActions"
import "../styles/shop-item.css"
const ShopItem=({title,image,price,rate,_id,description,big})=>{
    const dispatch=useDispatch()
    const addcard=(id)=>{
        fetch(URL+"/addtocart/"+id,{
            credentials:"include"
        })
        .then(res=>res.json())
        .then(result=>dispatch(addtocart(result)))
        .catch(err=>console.log(err))
    }
    return(
        <div className={big?"shop-item big":"shop-item"}>
            <div className="shop-card">
                <div className="shop-image">
                <img  src={image} alt={title}/>
            </div>
                <div className="shop-detail">
                    <Link to={"/"+_id}>{title}</Link>
                    <h3>{"قیمت: "+price}</h3>
                    {description?<p>{description}</p>:""}
                    <span>{"امتیاز: "+rate}</span>
                </div>
            </div>
            <button className={title} onClick={()=>{
                addcard(_id)
            }}>اضافه به سبد</button>
        </div>
    )
}

export default ShopItem