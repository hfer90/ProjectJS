import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProducts } from "../../mocks/FakeApi"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const [carg, setCarg] = useState(false)

    const { itemId } = useParams()
    console.log(itemId)

    useEffect(() => {
        setCarg(true)

        getProducts
            .then((res) => {
                setProductDetail(res.find((item) => item.id === itemId))
            })
            .finally(() => {
                setCarg(false)
            })
    }, [itemId])


    return (
        <div>
            {carg ? <p>Cargando!</p> : <ItemDetail {...productDetail} />}

        </div>

    )
}