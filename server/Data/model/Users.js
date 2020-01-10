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
    },
    graphql:{
        id : "Int",
        firstName : "String",
        lastName : "String",
        email :  "String",
        username : "String",
        password : "String"
    }
};


const User = sequelize.define('user', FIELDS.sequelize)
module.exports  = User;

