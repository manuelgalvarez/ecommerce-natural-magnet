var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Declarar el archivo de conexión con la base de datos
var database = require('./config/database');

var usuariosRouter = require('./routes/usuarios.router');

// Declarar el archivo auth
var auth = require('./auth/main_auth');

// Declarar cors
var cors = require('cors');

//Declarar el archivo de empleados.router
var empleadosRouter = require('./routes/empleados.router');
var productosRouter = require('./routes/productos.router');

// Express
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Usar Cors
app.use(cors());

// Establecer conexión con mongoDB
database.mongoConnect();

// Enviar usuario y contraseña para poder autenticar 
app.use('/usuarios', usuariosRouter);

// auth: Bloquear al usuario sin identificar
app.use(auth);

// Router
app.use('/empleados', empleadosRouter);
app.use('/productos', productosRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
