const Sequelize = require('sequelize');
const sequelize = require('../database');

FIELDS = {
    sequelize:{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement : true,
            allowNull: false,
            primaryKey: true
        },
        firstName: Sequelize.STRING,
        lastName : Sequelize.STRING,
        email : Sequelize.STRING,
        username :  Sequelize.STRING,
        password :   Sequelize.STRING        
    }
};


const User = sequelize.define('user', FIELDS.sequelize)
module.exports  = User;

