import React from "react";
import { Container, Row } from "react-bootstrap";
import { request } from "../../helper/helper";
import DataGrid from "../../grid/grid";
import Loading from "../../loading/loading";
import "../empleados.css";

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
    this.state = {
      loading: false,
      idEmpleado: null,
    };
    this.onClickEditButton = this.onClickEditButton.bind(this);
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

  onClickEditButton(row){
    this.props.setIdEmpleado(row._id);
    this.props.changeTab('editar');
  }

  render() {
    return (
      <Container id="empleados-buscar-container">
        
        <Loading show={this.state.Loading}/>

        <Row>
          <h2>Buscar empleados</h2>
        </Row>
        
        <Row>
          <DataGrid url="/empleados" 
            columns={ columns } 
            showEditButton={true}
            onClickEditButton={this.onClickEditButton}
          />
        </Row>

      </Container>
    );
  }
}
