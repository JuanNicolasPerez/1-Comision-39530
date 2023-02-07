import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({ item }) => {
    return (
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={`../img/${item.img}`} className="img-fluid img-detail" alt={`Imagen de ${item.nombre}`} />
            </div>
            <div className='col-md-8'>
                <div className='cardBody'>
                    <h5 className='card-title'>{item.nombre}</h5>
                    <p className='card-text'>Categoria: {item.rubro}</p>
                    <p className='card-text'>Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <p className='card-text'>Stock: {item.cantidad}</p>
                    <ItemCount valInicial={1} stock={item.cantidad} />
                    <div className='btn-comprar'>
                        <button className='btn btn-secondary'>Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
