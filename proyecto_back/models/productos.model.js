const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Crear Schema de productos
const ProductosSchema = new Schema({
    id_producto:{type: String, required: true, max:50},
    prod_nombre:{type: String, required: true, max:100},
    prod_descripcion:{type: String, required: false, max:300},
    prod_marca:{type: String, required: true, max:50},
    prod_categoria:{type: String, required: true, max:50},
    prod_precio:{type: Number, required: true, max:10000000},
    prod_cantidad:{type: Number, required: true, max:100}
});

module.exports = mongoose.model("productos", ProductosSchema);
