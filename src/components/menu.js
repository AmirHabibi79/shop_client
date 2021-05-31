import {useState} from "react"
import MenuCard from "./menu_card"
import "../styles/menu.css"
const Menu=()=>{
    const [open,setOpen] =useState(false)
    return(
        <div className="menu">
            <div className="menu-btn">
                <button onClick={()=>setOpen(!open)}>
                    &#x2630;
                </button>
                <MenuCard setopen={setOpen} open={open}/>
            </div>
        </div>
    )
}

export default Menu