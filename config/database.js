var Sequelize = require('sequelize');
var connection = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS);
module.exports = connection;
