import { Contenedor } from "../../Contenedor/Contenedor"
import { Item } from "../Item/Item"

export const ItemList = ({ listaProductos }) => {

    return (
        <Contenedor>
            <div>
                <h2>Productos destacados</h2>
                <hr />
                <div className="d-flex">
                    {listaProductos.map((producto) => <Item key={producto.id} producto={producto} />)}
                </div>
            </div>
        </Contenedor>
    )
}