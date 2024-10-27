//AQUI SE CREARAN LAS FUNCIONES PARA ACTUALIZAR, CREAR, BORRAR Y MOSTRAR LOS PERSONAJES

//Importaciones 
const bd = require('../conexion/db');


//Se iran creando las funciones que me permitiran enviar y recibir informaciÓn 
const personajesController = {

    mostrarPersonajes(req,res){

        bd.query('SELECT * FROM personajes',(err, results) => { 

            if(err){

                console.log(err)

            }

            res.json(results).status(200);

   
        })

    }, mostrarMisPersonajes(req,res){

        // console.log(req.params.usuario);
        let {usuario} = req.params;

        bd.query('SELECT * FROM personajes WHERE usuario_escritor =?',[usuario],(err,results) => { 

            // console.log(results)
            if (err){
                res.json({error: 'Error en la busqueda'}).status(500)
            }
            res.json(results).status(200);

        })
    }, crearPersonajes(req,res){

        // console.log(req.body)
        
        let {nombre,edad,nacimiento,raza,descripcion,frase,usuario_escritor} = req.body;
   

        bd.query('INSERT INTO personajes (nombre,edad,nacimiento,raza,descripcion,frase,usuario_escritor) VALUES (?,?,?,?,?,?,?)'
            ,[nombre,edad,nacimiento,raza,descripcion,frase,usuario_escritor],(err,results) => {

                // console.log(results)
                if(err){
                    res.json({error: 'Error en la insercción de crear.'}).status(500)
                }

                res.json({insercion: 'Ok'}).status(200)
            })

     }, buscaPersonajes(req,res){
        
        // console.log(req.params)
     
        let {id} = req.params; 

        bd.query('SELECT * FROM personajes WHERE id_personaje = ?', [id],(err,results) => {

            // console.log(results)
            if (err) {
                res.json({error: 'Error en la consulta'}).status(500)
            }

            res.json(results[0]).status(200)
        })

     }, editarPersonajes(req,res){

        // console.log(req.body)
        let id = req.body.id_personaje;
        let {nombre,edad,nacimiento,raza,descripcion,frase} = req.body;

        bd.query('UPDATE personajes SET nombre = ?, edad = ?, nacimiento = ?, raza = ?, descripcion = ?, frase = ? WHERE id_personaje = ?',
             [nombre,edad,nacimiento,raza,descripcion,frase, id],(err,results) => {

                if(err){
                    res.json({error: 'Error en la consulta'}).status(500)
                }

                res.json({mensaje: 'Ok'}).status(200)
             })

     }, borrarPersonaje(req,res){

        // console.log(req.params)
        let {id} = req.params;

        bd.query('DELETE FROM personajes WHERE id_personaje = ?', [id],(err,results) => {

            // console.log(results)

            res.json({respuesta: 'Ok'}).status(200);
        })
     }

}


module.exports = personajesController; 