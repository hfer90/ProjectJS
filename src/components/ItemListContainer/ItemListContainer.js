import React, { useState } from "react";



const ItemListContainer = (  ) => {
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
}

export default ItemListContainer;

