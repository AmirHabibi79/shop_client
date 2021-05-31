import NavLinks from "./navLinks"
import useClick from "../hooks/useClick"
import "../styles/menu-card.css"
import { useEffect } from "react"
const MenuCard=({open,setopen})=>{
   const isClicked= useClick(".shadow")
   useEffect(()=>{
        if(isClicked)
        setopen(false)
   },[isClicked])
    return(
        <div className="menu-card">
            <div className={open?"menu-card-wrapper show-wrapper":"menu-card-wrapper"}>
                <NavLinks onclick={()=>setopen(false)} order="column"/>
            </div>
            <div className={open?"shadow show":"shadow"}></div>
        </div>
    )

}
export default MenuCard