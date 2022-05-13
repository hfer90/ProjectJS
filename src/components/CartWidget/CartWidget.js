import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import carrito from "../../img/carrito.jpg"

const CartWidget = () => {

    const {cartQuantity} = useContext(CartContext)

    return (
        <div>
            <Link to="/cart"><img className="img" src={carrito} alt="carrito" width="140px" /></Link>
            <span>{cartQuantity()}</span>
        </div>
    )
}


export default CartWidget