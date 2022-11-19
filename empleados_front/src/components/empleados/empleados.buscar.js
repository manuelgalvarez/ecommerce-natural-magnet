import React from "react";
import { request } from "../helper/helper";
import { Container, Row} from "react-bootstrap";
import DataGrid from '../grid/grid';

//Import los estilos css
import "./empleados.css";

const columns = [
  {
    dataField: "_id",
    text: "ID",
    hidden: true,
  },
  {
    dataField: "emp_nombre",
    text: "Nombre",
  },
  {
    dataField: "emp_apellido_p",
    text: "Primer Apellido",
  },
  {
    dataField: "emp_apellido_m",
    text: "Segundo Apellido",
  },
  {
    dataField: "emp_telefono",
    text: " Telefono",
  },
  {
    dataField: "emp_mail",
    text: "Correo Electronico",
  },
  {
    dataField: "emp_direccion",
    text: " Direccion",
  },
];

export default class EmpleadosBuscar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    request
      .get(this.props.url)
      .then((response) => {
        this.setState({ rows: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    return (
      <Container id="empleados-buscar-container">
        
        <Row>
          <h2>Buscar empleados</h2>
        </Row>

        <Row>
          <DataGrid url="/empleados" columns={ columns }/>
        </Row>

      </Container>
    );

  }

}
