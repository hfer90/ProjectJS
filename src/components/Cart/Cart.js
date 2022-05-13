import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem} = useContext(CartContext)

    console.log(cart)

    return (
        <div className="container my-5">
            <h2>Este es tu carrito</h2>
            <hr/>

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.nombre}</h4>
                        <p>Cantidad: ${item.cantidad}</p>
                        <h5>Precio total: ${item.cantidad * item.precio}</h5>
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Remover item</button>
                        <hr/>
                    </div>
                ))
            }

            <h3>Total de la compra: ${cartTotal()} </h3>
            <hr/>
            <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>
        </div>

    )
}

export default Cart;