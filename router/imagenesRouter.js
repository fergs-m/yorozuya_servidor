//SE IRAN CREANDO LAS RUTAS LAS CUALES ME MOSTRARAN LA INFORMACIÓN PEDIDA

//Importacion
const express = require("express");
const imagenesController = require("../controllers/imagenesController");

//creación de router que permite crear rutas
const router = express.Router();

//creación de ruta get
router.get("/", imagenesController.muestraImagenes);

module.exports = router;
