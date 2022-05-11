import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Contenedor } from "../../Contenedor/Contenedor"
import ItemCount from "../ItemCount/ItemCount"


export const ItemDetail = ({nombre, id, desc, precio, img, stock}) => {
    
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }

    
    const [cantidad, setCantidad] = useState(1)
    const agregarAlCarrito = (cantidad) => {
        const itemToAdd = {
            id,
            img,
            nombre,
            precio,
            cantidad
        }
        console.log(itemToAdd)
    }


    return (
        <Contenedor>
            <div>
                <h2>Detalle de producto</h2>
                <img src={img} alt={nombre}/>
                <p>{desc}</p>
                <p>Stock: {stock}</p>
                
                <ItemCount 
                    stock={stock} 
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    onAdd={agregarAlCarrito}
                />

                <button className="btn btn-outline-primary" onClick={handleNavigate}>Volver</button>
            </div>
        </Contenedor>
    )
}