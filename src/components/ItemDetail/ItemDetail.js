import { useNavigate } from "react-router-dom"
import { Contenedor } from "../../Contenedor/Contenedor"

export const ItemDetail = ({productDetail}) => {
    const {nombre, id, desc, precio, img, stock} = productDetail
    
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }

    return (
        <Contenedor>
            <div>
                <h2>Detalle de producto</h2>
                <img src={img} alt={nombre}/>
                <p>{desc}</p>
                <button className="btn btn-outline-primary" onClick={handleNavigate}>Volver</button>
            </div>
        </Contenedor>
    )
}