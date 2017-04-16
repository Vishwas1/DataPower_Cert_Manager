// var settings = require('../../config/settings');

module.exports = function (req, res, next) {
  //res.sendfile(settings.path + '/public/index.html');
  console.log('home controller');
   res.render('index', { title: 'Express',name: 'Vikram',place1 : 'Dosut' });
};