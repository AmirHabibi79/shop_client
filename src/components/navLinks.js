import {Link} from "react-router-dom"
const NavLinks=({order,onclick})=>{

    return(
        <div className={order==="column"?"links column":"links"}>
        {onclick?
            <Link onClick={onclick} to="/">فروشگاه</Link>:
            <Link to="/">فروشگاه</Link> 
        }
        </div>
    )
}

export default NavLinks