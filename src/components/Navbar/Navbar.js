import './Navbar.css';
import logo from "../../img/logo.jpg"
import carrito from "../../img/carrito.jpg"

export const NavBar = () => {

    return (

        <header className="header">
            <div className="menu">
                
                <img className="img" src={logo} alt="PROJECT V" width="140px" />
                <h1>PROJECT V</h1>
                <nav>
                    <ul>
                        <li>INICIO</li>
                        <li>PLANTAS</li>
                        <li>VARIOS</li>
                        <li>CONTACTO</li>
                    </ul>
                </nav>
                <img className="img" src={carrito} alt="carrito" width="140px" />

            </div>
        </header>
    )
}