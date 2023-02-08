import { Link } from "react-router-dom";

export const Item = ({item}) => {
    return (
        <div className="card card-producto" style={{ width: '18rem' }}>
            <img src= {`../img/${item.img}`} key={item.id1} className="card-img-top" alt={"producto"} />
            <div className="card-body">
                <h5 className="card-title">{item.nombre} {item.nombre}</h5>
                <h5 className="card-text">{item.rubro}</h5>
                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <button className="btn"><Link className="nav-link" to={`/item/${item.id}`}>Ver Producto</Link></button>
            </div>
        </div>

    );
}

export default Item;
