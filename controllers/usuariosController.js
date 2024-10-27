//AQUI SE CREARAN LAS FUNCIONES PARA VERIFICAR Y TRAER DATOS DE LA BASE DE DATOS

//importar conexión
const db = require("../conexion/db");

//creación de funciones para traer y comprobar si los usuarios estan ingresados en la base de datos
const usuariosController = {
  verificarUsuarios(req, res) {
    let { usuario, contrasena } = req.body;
    // console.log(req.body)

    //con esto le digo que seleccione todos los usuarios donde nombre y contraseña es igual a una variable
    db.query(
      "SELECT * FROM usuarios WHERE nombre = ? AND contrasena = ?",
      [usuario, contrasena],
      (err, results) => {
        if (err) {
          console.log(err);
        }

        if (results.length == 0) {
          //significa que no ha encontrado ningún usuario si es igual a 0 y dará un mensaje de error

          res
            .json({ mensajeError: "Usuario o contraseña incorrecto" })
            .status(401);
        } else {
          //si al acceder a la posición 0 contraseña y usuario es correcto dará un mensaje de ok

          res.json(results[0]).status(200);
        }
      }
    );
  },
};

module.exports = usuariosController;
