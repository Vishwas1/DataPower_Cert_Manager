var controllers = require('../app/controllers');
module.exports = function (app) {
  app.get('/', controllers.home);
  app.get('/api/data', controllers.homeDb);
};
