import { Contenedor } from "../../Contenedor/Contenedor"
import { Item } from "../Item/Item"

export const ItemList = ({ productos }) => {

    return (
        <Contenedor>
            <div class="col-12">
                <h2>Productos destacados</h2>
                <hr />
                <div className="row mx-auto">
                    {productos.map((el) => <Item key={el.id} {...el} />)}
                </div>
            </div>
        </Contenedor>
    )
}