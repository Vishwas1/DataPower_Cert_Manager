var dbconnection  = require('../.././config/database');
var CertificateList_Model = require ('.././model/certLst_model');
module.exports = function (req, res, next) {
    //res.sendfile(settings.path + '/public/index.html');
  dbconnection
    .authenticate()
    .then(function(err) {
      console.log('Connection has been established successfully.');
      CertificateList_Model.findAll().then(function(data){
        // console.log(data);
        // res.render('index', { title: 'Express',name: 'Vikram',place1 : 'Dosut',fromDb : JSON.stringify(data) });
        res.json(data);
      });
    })
    .catch(function (err) {
      console.log('Unable to connect to the database:', err);
    });
};
