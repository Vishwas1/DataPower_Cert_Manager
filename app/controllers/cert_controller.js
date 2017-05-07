var dbconnection  = require('../.././config/database');
var certificate = require ('.././model/dpm_cert_table');
module.exports = function (req, res, next) {
    //res.sendfile(settings.path + '/public/index.html');
  console.log('Cert controller');

  dbconnection
    .authenticate()
    .then(function(err) {
      console.log('Connection has been established successfully.');
      certificate.findAll({
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
