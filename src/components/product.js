import {useParams} from "react-router-dom"
import useFetch from "../hooks/useFetch"
import {URL} from "../defines"
import ShopItem from "./shop_item"
const Product=()=>{
    const {id}=useParams();
    const data=useFetch(URL+"/products/"+id)
    const content=()=>{
        if(data!==undefined){
            if(Object.keys(data).includes("message")){
                return(
                    <h1>product does not exist</h1>
                )
            }
        if(Object.keys(data).includes("_id")){
            if(data){
                return (
                    <ShopItem big _id={data._id} title={data.title} image={data.image} price={data.price} rate={data.rate} description={data.description} />
                )
            }else{
                return(
                    <h1>Loading..</h1>
                )
            }
        }else{
            return(
                <h1>product does not exist</h1>
            )
        }
    }
    else{
        return(
            <h1>Loading..</h1>
        )
    }
    }
    return(
        <>
        {content()}
        </>
    )
}

export default Product