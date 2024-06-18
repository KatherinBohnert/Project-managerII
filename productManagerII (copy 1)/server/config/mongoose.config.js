const mongoose = require('mongoose');
    mongoose.connect("", {
        useNewParser:  true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Conexion con la base de datos establecida"))
    .catch(err => console.log("algo salio mal"))
