import { Link } from "react-router-dom";
import {Nav} from "../Nav/Nav"

export const Header = () => {
    return (
        <header>
            <Link to="/">
                <h1>Logo</h1>
            </Link>
            <Nav />
        </header>
    );
};