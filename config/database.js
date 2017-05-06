var Sequelize = require('sequelize');
// var connection = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS);
var connection = new Sequelize("dp_cert_manager","root","");
module.exports = connection;
