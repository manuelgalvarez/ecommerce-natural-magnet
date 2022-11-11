const Empleado = require('../models/empleados.model');

//Sino se puede conectar al modelo con el modelo
let response = {
    msg: "",
    exito: false
}

//FUNCIÓN CREATE PARA CREAR/REGISTRAR UN EMPLEADO 
//Si existe conexión con el modelo, trabajará con una función llamada create 
//La cual permitira crear el registro del empleado
exports.create = function(req,res){

    //Crear un nuevo empleado capturando los datos desde el front-end
    let empleado = new Empleado({
        emp_nombre: req.body.emp_nombre,
        emp_apellido_p: req.body.emp_apellido_p,
        emp_apellido_m: req.body.emp_apellido_m,
        emp_telefono: req.body.emp_telefono,
        emp_mail: req.body.emp_mail,
        emp_direccion: req.body.emp_direccion
    })

    //Guardar los datos del empleados
    empleado.save(function(err){
        
        //Error al registrar el empleado
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el empleado."
            res.json(response)
            return;
        }

        //Registrar correctamente el empleado
        response.exito = true,
        response.msg = "El empleado se guardó correctamente."
        res.json(response)

    })

}

//FUNCIÓN FIND PARA BUSCAR/SELECCIONAR TODOS LOS EMPLEADOS REGISTRADOS
exports.find = function(req,res){
    
    Empleado.find(function(err, empleados){
        res.json(empleados)
    })

}

//FUNCIÓN FINDONE PARA BUSCAR/SELECCIONAR EL EMPLEADO SEGÚN EL _ID
exports.findOne = function(req,res){
    
    Empleado.findOne({_id: req.params.id},function(err, empleado){
        res.json(empleado)
    })

}

//FUNCIÓN UPDATE PARA ACTUALIZAR INFORMACIÓN DEL EMPLEADO SEGÚN EL _ID 
exports.update = function(req,res){

    let empleado = {
        emp_nombre: req.body.emp_nombre,
        emp_apellido_p: req.body.emp_apellido_p,
        emp_apellido_m: req.body.emp_apellido_m,
        emp_telefono: req.body.emp_telefono,
        emp_mail: req.body.emp_mail,
        emp_direccion: req.body.emp_direccion
    }

    Empleado.findByIdAndUpdate(req.params.id, {$set: empleado}, function(err){

        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el empleado."
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado modifico correctamente."
        res.json(response)

    })

}

//FUNCIÓN REMOVE PARA ELIMINAR EL EMPLEADO SEGÚN SU _ID
exports.remove = function(req,res){

    Empleado.findByIdAndRemove({_id: req.params.id}, function(err){

        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el empleado."
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado eliminado correctamente."
        res.json(response)

    })

}
