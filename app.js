require('dotenv').config()

const ServidorModelo = require("./models/ServidorModelo")

const servidorFutbol=new ServidorModelo()

servidorFutbol.despertarServidor()