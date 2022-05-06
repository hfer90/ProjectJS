import { useEffect, useState } from "react"
import { stock } from "../../data/stock"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        
        //ver bien aca como se arma
        setProductos(stock)
        //

        setLoading(false)

    }, [])

    return (
        <>
            {
                loading ? <h2>Cargando</h2>  // gif carga?
                    : <ItemList productos={productos} />
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