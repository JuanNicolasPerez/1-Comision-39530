import { Link } from "react-router-dom";

const Categoria = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <button className="btn">Productos</button> 
                </a>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to={"/category/Varios"}>Varios</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to={"/category/Marcadores"}>Marcadores</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to={"/category/Lapices"}>Lapices</Link></li>
                </ul>
            </li>
        </>
    );
}

export default Categoria;
