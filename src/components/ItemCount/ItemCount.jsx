import { useState } from "react";

export const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const sumar = () => setContador( contador + 1)

    const restar = () => setContador( contador - 1)
    return (
        <>
            <button className="btn btn-dark" onClick={()=> sumar()}> + </button>
            {contador}
            <button className="btn btn-dark" onClick={()=> restar()}> - </button>
        </>
    );
}

export default ItemCount;
