import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helper";
import Loading from '../../loading/loading';
import MessagePrompts from '../../prompts/message';
import ConfirmationPrompts from '../../prompts/confirmation';

import '../empleados.css';

export default class EmpleadosEditar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      idEmpleado: this.props.getIdEmpleado(),
      rediret: false,
      message:{
        text: '',
        show: false,
      },
      confirmation:{
        title:'Modificar empleado.',
        text:'¿Desea modificar el empleado?',
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
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  componentDidMount(){
    this.getEmpleado();
  }

  getEmpleado() {
    this.setState({ loading: true });
    request
    .get(`/empleados/${this.state.idEmpleado}`)
    .then((response) => {
      this.setState({
        empleado: response.data,
        loading: false,
      });
    })
    .catch((err) => {
      console.error(err);
      this.setState({ loading: false });
    });
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
    .put(`/empleados/${this.state.idEmpleado}`, this.state.empleado)
    .then((response) => {
        if(response.data.exito){
          this.props.changeTab('buscar');
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

  onCancel(){
    this.setState({
      confirmation: { ...this.state.confirmation, show: false, },
    })
  }

  onConfirm(){
    this.setState({
      confirmation: { ...this.state.confirmation, show: false, }, },
    this.guardarEmpleados());
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
      
      <ConfirmationPrompts
        show={this.state.confirmation.show}
        title={this.state.confirmation.title}
        text={this.state.confirmation.text}
        onCancel={this.onCancel}
        onConfirm={this.onConfirm}
      />

        <Loading show={this.state.loading} />

        <Row>
          <h2>Editar Empleados</h2>
        </Row>

        <Row>

          <Form>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                value={this.state.empleado.emp_nombre}
                onChange={(e) => this.setValue("emp_nombre", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Primer Apellido</Form.Label>
              <Form.Control
                value={this.state.empleado.emp_apellido_p}
                onChange={(e) => this.setValue("emp_apellido_p", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Segundo Apellido</Form.Label>
              <Form.Control
                value={this.state.empleado.emp_apellido_m}
                onChange={(e) => this.setValue("emp_apellido_m", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                value={this.state.empleado.emp_telefono}
                onChange={(e) => this.setValue("emp_telefono", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                value={this.state.empleado.emp_mail}
                onChange={(e) => this.setValue("emp_mail", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                value={this.state.empleado.emp_direccion}
                onChange={(e) => this.setValue("emp_direccion", e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={() => 
                this.setState({
                  confirmation: { ...this.state.confirmation, show: true },
                })
              }>
              Editar empleado
            </Button>

          </Form>

        </Row>

      </Container>
    );
  }
}
