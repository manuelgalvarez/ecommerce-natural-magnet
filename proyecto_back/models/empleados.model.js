const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Crear Schema de empleados
const EmpleadosSchema = new Schema({
    emp_nombre:{type: String, required: true, max:60},
    emp_apellido_p:{type: String, required: true, max:40},
    emp_apellido_m:{type: String, required: true, max:40},
    emp_telefono:{type: String, required: true, max:15},
    emp_mail:{type: String, required: false, max:70},
    emp_direccion:{type: String, required: false, max:150}
});

module.exports = mongoose.model("empleados", EmpleadosSchema);
