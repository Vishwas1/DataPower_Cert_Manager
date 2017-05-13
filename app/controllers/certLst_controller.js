var dbconnection  = require('../.././config/database');
var CertificateList_Model = require ('.././model/certLst_model');

function serviceController () {}

serviceController.getCerts = function (req, res, next) {
  dbconnection
    .authenticate()
    .then(function(err) {
      CertificateList_Model.findAll().then(function(data){
        console.log(data);
        res.json(data);
      });
    })
    .catch(function (err) {
      console.log('Unable to connect to the database:', err);
    });
};

serviceController.postCerts = function (req, res, next) {
  // if(req.body)
  // {
    var reqObject = req.body;
    dbconnection
      .authenticate()
      .then(function(err) {
          CertificateList_Model.update({
            CryptoObject : reqObject.CryptoObject,
            NotBefore : reqObject.NotBefore,
            ExpiresInDays : reqObject.ExpiresInDays,
            NotAfter : reqObject.NotAfter,
            Subject : reqObject.updated,
            Issuer : reqObject.Issuer
          }, { where: { Id : reqObject.Id } });
          res.send('Success!');
      },function(err){
        res.send('Error!');
      })
      .catch(function (err) {
        console.log('Unable to connect to the database:', err);
        res.send('Error!');
      });
  // }else{
  //   res.send('Error');
  // }

};

module.exports =serviceController;
