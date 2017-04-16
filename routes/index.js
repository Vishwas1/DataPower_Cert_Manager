
var controllers = require('../app/controllers')
/* GET home page. */


module.exports = function (app) {
	app.get( '/'     , controllers.home);
	app.get( '/test' , controllers.test.list);
};