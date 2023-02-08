import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { nombre } = useParams()

    useEffect(() => {
        if (nombre) {
            fetch('../Json/product.json')
                .then(response => response.json())
                .then(items => {
                    const products = items.filter(prod => prod.idCategoria === nombre)
                    const productsList = ItemList({ products })
                    console.log(productsList)
                    setProductos(productsList)
                })
        } else {
            fetch('./Json/product.json')
                .then(response => response.json())
                .then(products => {
                    const productsList = ItemList({ products })
                    console.log(productsList)
                    setProductos(productsList)
            })

        }
    }, [nombre])

    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    );
}

export default ItemListContainer;
