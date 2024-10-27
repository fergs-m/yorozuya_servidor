//importación paquetes
const express = require("express");
const cors = require("cors");
const bunyan = require("bunyan");

//importación router
const usuarios = require("./router/usuariosRouter");
const personajes = require("./router/personajesRouter");
const imagenes = require("./router/imagenesRouter");

//dotenv
require("dotenv").config();

//nombre servidor
const loggerServidor = bunyan.createLogger({ name: "Servidor" });

//creación app
const app = express();

//Lo que la app usará
app.use(cors());
app.use(express.json()); //nos permite trabajar con los json que nos envie el cliente
app.use(express.static(__dirname + "/public")); //se le dice que busque siempre los archivos estaticos en public

//app usa las rutas
app.use("/usuarios", usuarios);
app.use("/personajes", personajes);
app.use("/imagenes", imagenes);


//Middelwere error 500
app.use((req, res) => {
  res.status(500).send("<h1>Error 500 de servidor</h1>");
});

//Puerto que la aplicación usará para mostrar los datos
app.listen(process.env.PORT, () => {
  loggerServidor.info("Servidor encendido");
});
