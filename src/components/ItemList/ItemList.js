import { Contenedor } from "../../Contenedor/Contenedor"
import { Item } from "../Item/Item"

export const ItemList = ( {productos} ) => {

    return (
        <Contenedor>    
            <h2>Productos destacados</h2>   
            <hr/>
            <div className="row">
                { productos.map( (el) => <Item key={el.id} {...el}/> )}
            </div> 
        </Contenedor>
    )
}