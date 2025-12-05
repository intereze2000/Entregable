import { Link } from "react-router-dom";
import {useCartContext} from "../../context/CartContext/useCartContext"
import "./Nav.css"
export const Nav = () => {
    const {getTotalItems} = useCartContext();

    return (
        <nav className="main-nav">
            <ul className="nav-links">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/categoria/Gold"}>Oro</Link>
                </li>
                <li>
                    <Link to={"/categoria/Bamboo"}>Bamboo</Link>
                </li>
                <li>
                    <Link to={"/categoria/Plata"}>Plata</Link>
                </li>
                <li className="nav-cart">
                    <Link to={"/carrito"}>Carrito</Link>
                    {getTotalItems() > 0 && (
                      <span className="cart-count">{getTotalItems()}</span>
                      )}
                </li>
            </ul>
        </nav>
    );
};