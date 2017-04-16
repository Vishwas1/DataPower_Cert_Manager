
// var express = require('express');
// var router = express.Router();
var controllers = require('../app/controllers');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express',name: 'Vikram',place1 : 'Dosut' });
// });

// var controllers = require('../app/controllers')

module.exports = function (app) {
  app.get( '/'                           , controllers.home);
};
