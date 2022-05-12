import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const Cart = () => {

    const { cart } = useContext(CartContext)

    console.log(cart)

    return (
        <div className="container my-5">
            <h2>Este es tu carrito</h2>
        </div>

    )
}

export default Cart;