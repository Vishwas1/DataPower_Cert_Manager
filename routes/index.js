var controllers = require('../app/controllers');
module.exports = function (app) {
  app.get('/', controllers.home);
  app.get('/api/cert-list', controllers.certs.getCerts);
  app.post('/api/cert-list-post', controllers.certs.postCerts);
};
