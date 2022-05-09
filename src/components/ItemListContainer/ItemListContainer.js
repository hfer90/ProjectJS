import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { getProducts } from "../../mocks/FakeApi"

export const ItemListContainer = () => {

    const [listaProductos, setListaProductos] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)

        getProducts
        .then( (res) => setListaProductos (res))
            .catch((error) =>console.log(error))
            .finally(()=> setLoading (false))
        }, [])


    return (
        <>
            {
                loading ? <h2>Cargando</h2>  // gif carga?
                    : <ItemList listaProductos={listaProductos} />
            }
        </>
    )

}








/*

const [counter, setCounter] = useState(0)

return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>
         sumar
        </button>
        <button onClick={() => setCounter(0)}>
         reiniciar
        </button>
        <p>{counter} {Date()}</p>
    </div>
)

*/