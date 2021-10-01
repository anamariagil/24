const express = require('express')
class ServidorModelo{
    constructor(){
        this.app = express()
        this.enrutarPeticiones()
    }

    despertarServidor(){
        this.app.listen(process.env.PUERTO,function(){
            console.log(`Servidor encendido ${process.env.PUERTO}` )
        })
    }

    enrutarPeticiones(){
        this.app.get('/avanzada/v1/jugadores', function (req, res) {
            res.send('Hello World')
        })

        this.app.post('/avanzada/v1/jugadores', function (req, res) {
            res.send('Hello World')
        })

        this.app.put('/avanzada/v1/jugadores', function (req, res) {
            res.send('Hello World')
        })
          
        this.app.delete('/avanzada/v1/jugadores', function (req, res) {
            res.send('Hello World')
        })
    }

    despertarBD(){

    }
}

module.exports=ServidorModelo