var dbconnection  = require('../.././config/database');
var CertificateList_Model = require ('.././model/certLst_model');

function serviceController () {}

serviceController.getCerts = function (req, res, next) {
  dbconnection
    .authenticate()
    .then(function(err) {
      CertificateList_Model.findAll().then(function(data){
        res.json(data);
      });
    })
    .catch(function (err) {
      console.log('Unable to connect to the database:', err);
    });
};

serviceController.postCerts = function (req, res, next) {
  dbconnection
    .authenticate()
    .then(function(err) {
        CertificateList_Model.update({
          CryptoObject : 'CryptoObject_updated',
          NotBefore : 'NotBefore_updated',
          ExpiresInDays : 'ExpiresInDays_updated',
          NotAfter : 'NotAfter_updated',
          Subject : 'Subject_updated',
          Issuer : 'Issuer_updated'
         }, { where: { Id : 1 } });
    })
    .catch(function (err) {
      console.log('Unable to connect to the database:', err);
    });
};

module.exports =serviceController;
