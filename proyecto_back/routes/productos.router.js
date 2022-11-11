const express = require("express");
const router = express.Router();

const productosController = require("../controllers/productos.controller");

//Proceso para crear/registrar un producto
router.post("/", productosController.create);

//Proceso para buscar/seleccionar todos los productos
router.get("/", productosController.find);

//Proceso para buscar/seleccionar el producto según el _id
router.get("/:id", productosController.findOne);

//Proceso para actualizar información del producto según el _id
router.put("/:id", productosController.update);

//Proceso para eliminar el registro de un producto según el _id
router.delete("/:id", productosController.remove);

module.exports = router;
