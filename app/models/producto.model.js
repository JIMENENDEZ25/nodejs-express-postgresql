
module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define ("productos", {
        nombre:{
            type: Sequelize.STRING
        },
        refrigerado:{
            type: Sequelize.BOOLEAN
        },
        congelado:{
            type: Sequelize.BOOLEAN
        },
        caducado: {
            type: Sequelize.BOOLEAN
        },
        stock: {
            type: Sequelize.INT
        }
    });
    
    return Producto
};