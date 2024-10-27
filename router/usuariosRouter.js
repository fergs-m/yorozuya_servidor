//SE IRAN CREANDO LAS RUTAS LAS CUALES ME MOSTRARAN LA INFORMACION PEDIDA HACIA LA TABLA USUARIOS

//importaciones
const express = require("express");
const usuariosController = require("../controllers/usuariosController");

//creación de router que permite crear rutas que puedan ser exportadas
const router = express.Router();

//rutas post (se envia la información por el cuerpo)
router.post("/", usuariosController.verificarUsuarios);

module.exports = router;
