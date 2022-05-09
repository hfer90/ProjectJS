import { Contenedor } from "../../Contenedor/Contenedor"

export const ItemDetail = ({productDetail}) => {
    const {nombre, id, desc, precio, img, stock} = productDetail

    return (
        <Contenedor>
            <div>
                <h2>Detalle de producto</h2>
                <img src={img} alt={nombre}/>
                <p>{desc}</p>

            </div>
        </Contenedor>
    )
}