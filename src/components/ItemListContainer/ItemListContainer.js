import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList"
import { getProducts } from "../../mocks/FakeApi"

export const ItemListContainer = () => {
    
    const [listaProductos, setListaProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        getProducts
            .then((res) => {
                if (categoryId) {
                    setListaProductos(res.filter((prod) => prod.category === categoryId))
                } else { setListaProductos(res) }

            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId])


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