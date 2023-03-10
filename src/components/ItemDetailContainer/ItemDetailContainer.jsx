import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const {id} = useParams()
    useEffect(() => {
        fetch('../Json/product.json')
            .then(response => response.json())
            .then(products => {
                const item = products.find(prod => prod.id === id)
                setProducto(item)
            })
    }, [id])

    return (
        <div className='card mb-3 container itemDetail'>
            <ItemDetail item={producto}/>
        </div>
    );
}
