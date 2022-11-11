const mongoose = require('mongoose');

const host = "localhost"; //Puerto del servidor web
const port = "27017"; //Puerto de mongoDB
const db = "db_naturalmagnet"; //Nombre de la base de datos

exports.mongoConnect = () => { const mongoStringConnection = `mongodb://${host}:${port}/${db}`;

    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind
    (console, "Mongodb connection error"))

}
