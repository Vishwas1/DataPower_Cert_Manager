var dbconnection  = require('../.././config/database');
var Test = require ('.././model/test');
module.exports = function (req, res, next) {
    //res.sendfile(settings.path + '/public/index.html');
  console.log('home controller');

  dbconnection
    .authenticate()
    .then(function(err) {
      console.log('Connection has been established successfully.');
      Test.findAll({
        attributes: ['data']
      }).then(function(data){
        console.log(data);
        // res.render('index', { title: 'Express',name: 'Vikram',place1 : 'Dosut',fromDb : JSON.stringify(data) });
        res.json(data);
      });
    })
    .catch(function (err) {
      console.log('Unable to connect to the database:', err);
    });
};
