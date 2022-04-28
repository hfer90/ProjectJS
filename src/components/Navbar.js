import React from "react";
import {Navbar,NavDropdown,Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.jpg'; 


function Minav() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                <img
                alt="Logo"
                src={logo}
                width="56"
                height="37"
                className="d-inline-block align-top"
                />{' '}                
                </Navbar.Brand>

                <Navbar.Brand href="#home">Project V</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Plantas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Cuadros</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Varios</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Contacto</Nav.Link>                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}


export default Minav;
