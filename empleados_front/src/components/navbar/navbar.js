import React from 'react';
import {Container, Nav, Navbar, Dropdown, DropdownButton, Row} from 'react-bootstrap';
import Cookies from 'universal-cookie';

//Importar estilos css del navbar
import './navbar.css';

//Importar los iconos FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

const cookies = new Cookies();

export default class menu extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    Logout() {
        cookies.remove("_s");
        window.location.reload();
    }

    render() {    
        return (

            <Navbar fixed="top" bg="success" variant="dark" expand="lg" id="navbar">
                <Container>

                    <Navbar.Brand href="/inicio">Natural MAGnet</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="mx-auto">
                            <Nav.Link href="/inicio">Inicio |</Nav.Link>
                            <Nav.Link href="">Catálogo |</Nav.Link>
                            <Nav.Link href="">Nosotros |</Nav.Link>
                            <Nav.Link href="/login">Iniciar sesión</Nav.Link>
                        </Nav>
                        
                        <DropdownButton id="dropdown-basic-button" title="Usuario">
                            <Dropdown.Header>
                                <Row>
                                    <FontAwesomeIcon icon={faUserSecret} />
                                </Row>   
                                <Row>Usuario#</Row> 
                            </Dropdown.Header>
                            <Dropdown.Divider></Dropdown.Divider>
                            <Dropdown.Item onClick={() => this.Logout()}>Cerrar sesión</Dropdown.Item>
                        </DropdownButton>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        );

    }
}
