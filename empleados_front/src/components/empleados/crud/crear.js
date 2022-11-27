import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helper";
import Loading from '../../loading/loading';
import MessagePrompts from '../../prompts/message';

import '../empleados.css';

export default class EmpleadosCrear extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rediret: false,
      message:{
        text: '',
        show: false,
      },
      loading:false,
      empleado: {
        emp_nombre: "",
        emp_apellido_p: "",
        emp_apellido_m: "",
        emp_telefono: "",
        emp_mail: "",
        emp_direccion: "",
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
    }

  setValue(inicioe, value) {
    this.setState({
      empleado: {
        ...this.state.empleado,
        [inicioe]: value,
      },
    });
  }
  
  guardarEmpleados(){
    this.setState({ loading: true });
    request
    .post('/empleados', this.state.empleado)
    .then((response) => {
        if(response.data.exito){
          this.setState({
            rediret: response.data.exito,
            message: {
              text: response.data.msg,
              show: true,
            },
          });
        }
        this.setState({ loading: false});
    })
    .catch((err) => {
        console.log(err);
        this.setState({ loading: true});
      });
  }

  onExitedMessage() {
    if (this.state.rediret) this.props.changeTab( 'buscar' );
  }

  render() {
    return (

    <Container id="empleados-crear-container">

      <MessagePrompts
      text={this.state.message.text}
      show={this.state.message.show}
      duration={2500}      
      onExited={this.onExitedMessage}
      />
      
        <Loading show={this.state.loading} />

        <Row>
          <h2>Crear Empleados</h2>
        </Row>

        <Row>

          <Form>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("emp_nombre", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Primer Apellido</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("emp_apellido_p", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Segundo Apellido</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("emp_apellido_m", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("emp_telefono", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => this.setValue("emp_mail", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("emp_direccion", e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={() => console.log(this.guardarEmpleados())}>
              Guardar empleado
            </Button>

          </Form>

        </Row>

      </Container>
    );
  }
}
