const Sequelize = require('sequelize');
var keys = require('../keys');
  
const sequelize = new Sequelize(keys.database, keys.user, keys.password, {
    dialect: 'mysql',
    host: keys.host
})

module.exports = sequelize;