//CON ESTE ARCHIVO JAVASCRIPT SE CREA LA CONEXIÓN DE MYSQL CON EL SERVIDOR

//Se importan los paquetes a usar
const mysql = require("mysql2");
const bunyan = require("bunyan");
const loggerDB = bunyan.createLogger({ name: "Conexión de la base de datos" });
require("dotenv").config();

//Plantilla de conexión que me permite comunicarme con mysql desde el servidor
const conexion = mysql.createConnection({
  host: process.env.HOST_BD,
  user: process.env.USUARIO_BD,
  password: process.env.CONTRA_BD,
  database: process.env.BASE_BD,
  port: process.env.PORT_BD
});

//Manejo de errores en la conexión
conexion.connect((err) => {
  //si existe el error que aparezca, si no, que aparezca un mensaje satisfactorio

  if (err) {
    loggerDB.error(err);
  }

  loggerDB.info("Conexión exitosa");
});

module.exports = conexion;
