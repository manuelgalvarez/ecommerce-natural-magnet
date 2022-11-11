import React from 'react';
import {Container, Form, Row, Col, Button} from 'react-bootstrap';
//Importar estilos css del login
import './login.css';

export default class login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario:'',
            pass:'',
        };
    }
    
    //Método para iniciar sesión
    iniciarSesion(){
        alert('Botón de iniciar sesión');
    };

    render() { 
        return (

            <Container id="login-container">

                <Row>
                    <Col sm="12" xs="12" md={{span: 4, offset:4}} lg={{span: 4, offset:4}} xl={{span: 4, offset:4}}>

                        <Row>
                            <h2>Iniciar sesión</h2>
                        </Row>
    
                        <Row>
                            <Form>
                        
                                <Form.Group className="mb-3" controlId="formBasicUser">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control onChange={(e) => this.setState({usuario: e.target.value})} placeholder="Ingresa tu usuario."/>
                                </Form.Group>
                                {/* {this.state.usuario} */}

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" onChange={(e) => this.setState({pass: e.target.value})} placeholder="Ingresa tu contraseña." />
                                </Form.Group>
                                {/* {this.state.pass} */}

                                <Button variant="success" 
                                    onClick={() => {this.iniciarSesion();}}>
                                    Iniciar sesión
                                </Button>  

                            </Form>
                        </Row>

                    </Col>
                </Row>

            </Container>

        );
    }
}
