const express = require("express");
const router = express.Router();

const empleadosController = require("../controllers/empleados.controller");

//Proceso para crear/registrar un empleado
router.post("/", empleadosController.create);

//Proceso para buscar/seleccionar todos los empleados
router.get("/", empleadosController.find);

//Proceso para buscar/seleccionar el empleado según el _id
router.get("/:id", empleadosController.findOne);

//Proceso para actualizar información del empleado según el _id
router.put("/:id", empleadosController.update);

//Proceso para eliminar el registro de un empleado según el _id
router.delete("/:id", empleadosController.remove);

module.exports = router;
