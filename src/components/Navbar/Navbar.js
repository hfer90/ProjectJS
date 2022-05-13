import { Link } from "react-router-dom";
import './Navbar.css';
import logo from "../../img/logo.jpg"
import CartWidget from "../CartWidget/CartWidget";

export const NavBar = () => {

    return (

        <header className="header">
            <div className="menu">
                <Link to="/">
                <img className="img" src={logo} alt="PROJECT V" width="140px" />
                </Link>
                <h1>PROJECT V</h1>
                <nav>
                    <ul>
                        <li><Link to="/">INICIO</Link></li>
                        <li><Link to="/category/mon">MON</Link></li>
                        <li><Link to="/category/glor">GLORI</Link></li>
                        <li><Link to="/category/verr">VERRU</Link></li>
                    </ul>
                </nav>
                <CartWidget/>

            </div>
        </header>
    )
}