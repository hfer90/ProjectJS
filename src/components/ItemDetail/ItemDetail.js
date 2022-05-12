import { Link } from "react-router-dom";
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Contenedor } from "../../Contenedor/Contenedor"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../Context/CartContext"


export const ItemDetail = ({ nombre, id, desc, precio, img, stock }) => {

    const { agregarItem, isInCart } = useContext(CartContext)
    
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }

    const [cantidad, setCantidad] = useState(1)
    const agregarAlCarrito = () => {
        const itemToAdd = {
            cantidad,
            id,
            img,
            nombre,
            precio,
        }
        agregarItem(itemToAdd)
    }


    return (
        <Contenedor>
            <div >
                <h2>Detalle de producto</h2>
                <hr />
                <div className="text-center mx-auto">
                    <img style={{ width: '30rem' }} src={img} alt={nombre} />
                    <p>{desc}</p>
                    <p>Stock: {stock}</p>

                    {
                        !isInCart(id)
                        ? <ItemCount 
                            stock={stock}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            onAdd={agregarAlCarrito}
                            />
                        : <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
  
                    }


                    <br />
                    <button className="btn btn-outline-primary" onClick={handleNavigate}>Volver</button>
                </div>
            </div>
        </Contenedor>
    )
}