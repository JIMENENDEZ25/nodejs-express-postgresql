const db = require("../models");
const Productos = db.productos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.nombre){
        res.status(400).send({
            message: "Content can not be empty"
        });
        return;
    }


    const producto = {
        nombre: req.body.nombre,
        refrigerado: req.body.refrigerado ? req.body.refrigerado : false,
        congelado: req.body.congelado ? req.body.congelado : false,
        caducado: req.body.caducado ? req.body.caducado : false

    }

}

