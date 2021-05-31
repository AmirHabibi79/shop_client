import Cart from "./cart"
import useResize from "../hooks/useResize"
import Menu from "./menu"
import NavLinks from "./navLinks"
import "../styles/navbar.css"
const Navbar=()=>{
   const isSmall=useResize(600)
    return(
        <div className="navbar">
            <h1>Shop</h1>
            <div className="cart-link">
                {isSmall===true?<><Cart/><Menu/></>:<><NavLinks/><Cart/></>}
            </div>
        </div>
    )
}

export default Navbar