require('dotenv').load();
var Sequelize = require('sequelize');
var connection = new Sequelize('dp_cert_manager','root',null);
module.exports = connection;
