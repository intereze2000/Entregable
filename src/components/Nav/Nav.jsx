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
                    <Link to={"/category/dulce"}>Dulce</Link>
                </li>
                <li>
                    <Link to={"/category/salado"}>Salado</Link>
                </li>
                {/* Put the class on the <li> so positioning for the badge works */}
                <li className="nav-cart">
                    <Link to={"/cart"}>Carrito</Link>
                    {getTotalItems() > 0 && (
                      <span className="cart-count">{getTotalItems()}</span>
                      )}
                </li>
            </ul>
        </nav>
    );
};