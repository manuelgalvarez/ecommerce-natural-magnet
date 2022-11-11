const Producto = require('../models/productos.model');

//Sino se puede conectar al modelo con el modelo
let response = {
    msg: "",
    exito: false
}

//FUNCIÓN CREATE PARA CREAR/REGISTRAR UN PRODUCTO 
//Si existe conexión con el modelo, trabajará con una función llamada create 
//La cual permitira crear el registro del producto
exports.create = function(req,res){

    //Crear un nuevo producto capturando los datos desde el front-end
    let producto = new Producto({
        id_producto: req.body.id_producto,
        prod_nombre: req.body.prod_nombre,
        prod_descripcion: req.body.prod_descripcion,
        prod_marca: req.body.prod_marca,
        prod_categoria: req.body.prod_categoria,
        prod_precio: req.body.prod_precio,
        prod_cantidad: req.body.prod_cantidad
    })

    //Guardar los datos del producto
    producto.save(function(err){
        
        //Error al registrar el producto
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el producto."
            res.json(response)
            return;
        }

        //Registrar correctamente el producto
        response.exito = true,
        response.msg = "El producto se guardó correctamente."
        res.json(response)

    })

}

//FUNCIÓN FIND PARA BUSCAR/SELECCIONAR TODOS LOS PRODUCTOS REGISTRADOS
exports.find = function(req,res){
    
    Producto.find(function(err, productos){
        res.json(productos)
    })

}

//FUNCIÓN FINDONE PARA BUSCAR/SELECCIONAR EL PRODUCTO SEGÚN EL _ID
exports.findOne = function(req,res){
    
    Producto.findOne({_id: req.params.id},function(err, producto){
        res.json(producto)
    })

}

//FUNCIÓN UPDATE PARA ACTUALIZAR INFORMACIÓN DEL PRODUCTO SEGÚN EL _ID 
exports.update = function(req,res){

    let producto = {
        id_producto: req.body.id_producto,
        prod_nombre: req.body.prod_nombre,
        prod_descripcion: req.body.prod_descripcion,
        prod_marca: req.body.prod_marca,
        prod_categoria: req.body.prod_categoria,
        prod_precio: req.body.prod_precio,
        prod_cantidad: req.body.prod_cantidad
    }

    Producto.findByIdAndUpdate(req.params.id, {$set: producto}, function(err){

        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el producto."
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto modifico correctamente."
        res.json(response)

    })

}

//FUNCIÓN REMOVE PARA ELIMINAR EL PRODUCTO SEGÚN SU _ID
exports.remove = function(req,res){

    Producto.findByIdAndRemove({_id: req.params.id}, function(err){

        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el producto."
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto eliminado correctamente."
        res.json(response)

    })

}


