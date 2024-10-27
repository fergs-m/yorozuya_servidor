//SE IRAN CREANDO LAS RUTAS LAS CUALES ME MOSTRARAN LA INFORMACION PEDIDA

//Importacion
const express = require("express");
const personajesController = require("../controllers/personajesController");

//creación de router que permite crear rutas 
const router = express.Router();

//rutas get
router.get("/cualesPersonajes/:id", personajesController.buscaPersonajes);
router.get("/:usuario", personajesController.mostrarMisPersonajes); //ruta diáamica que ira cmabiando dependiendo del usuario que este logeado
router.get("/", personajesController.mostrarPersonajes);

//rutas post
router.post("/", personajesController.crearPersonajes);

//rutas put (actualizar)
router.put("/", personajesController.editarPersonajes);

//rutas delete
router.delete("/:id", personajesController.borrarPersonaje);

module.exports = router;
