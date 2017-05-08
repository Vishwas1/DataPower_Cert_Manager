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
      // console.log('------------------------CertificateList_Model -------------------');
      // console.log(CertificateList_Model);
      // console.log('------------------------CertificateList_Model -------------------');
      console.log('------------------------req Object -------------------');
      console.log(req.body);
      console.log('------------------------req Object -------------------');

//       var body = [];
// req.on('data', function(chunk) {
//   body.push(chunk);
// }).on('end', function() {
//   body = Buffer.concat(body).toString();
//   // at this point, `body` has the entire request body stored in it as a string
// });
// console.log(body);
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
