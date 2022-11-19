import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import app from '../../app.json';
import { isNull } from 'util';
import Cookies from 'universal-cookie';
import { calcularExpirarSesion } from '../helper/helper';
import Loading from '../loading/loading';

//Importar estilos css del login
import './login.css';

const {APIHOST} = app;
const cookies = new Cookies();

export default class login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            usuario: '',
            pass: '',
        };
    }
    
    //Método para iniciar sesión
    iniciarSesion(){
        this.setState({ loading: true });
        axios.post(`${APIHOST}/usuarios/login`,{
            usuario: this.state.usuario,
            pass: this.state.pass,
        })
        .then((response) => {
            if (isNull(response.data.token)){
                alert('Usuario y/o contraseña inválidas.');
            }
            else{
                cookies.set('_s', response.data.token,{
                    path: '/',
                    expires: calcularExpirarSesion(),
                });
                this.props.history.push(window.open('/empleados'));
            }
            this.setState({ loading: false });
        })
        .catch((err) => {
            this.setState({ loading: false });
        });
   
    };

    render() { 
        return (

            <Container id="login-container">

                <Loading show={this.state.loading} /> 

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
