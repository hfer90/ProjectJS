import { useEffect, useState } from "react"
import { getProducts } from "../../mocks/FakeApi"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    const [productDetail,setProductDetail] = useState ({})
    const [carg, setCarg] = useState(false)

    
    useEffect(() => {
        setCarg(true)

        getProducts
        .then( (res) => setProductDetail (res.find((item) => item.id  === '02')))
        
        .catch((error) =>console.log(error))
        .finally(()=> setCarg (false))
        }, [])


    return (
        <div>
            {carg ? <p>Cargando!</p> : <ItemDetail productDetail={productDetail}/> }

        </div>

    )
}