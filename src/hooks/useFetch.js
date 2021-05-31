import {useEffect,useState} from "react"
const Fetch=(url,method="GET")=>{
    const [data,setData]=useState()
        useEffect(()=>{
            fetch(url,{
                method:method,
                credentials:"include"
            })
            .then(res=>res.json())
            .then(result=>{setData(result)})
            .catch(err=>console.log(err))
        },[])
        return data
}
export default Fetch