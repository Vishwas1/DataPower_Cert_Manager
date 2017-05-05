var connection = require('../.././config/database');
var CertificateList_Model = connection.define('dpcertlist',{
    Id      : {
      type: Number,
      primaryKey : true
    },
	  CryptoObject : String,
	  NotBefore  : String,
	  NotAfter  : String,
	  ExpiresInDays : String,
	  Subject : String,
	  Issuer : String
  },{
	  createdAt: false,
	  updatedAt :  false
  });
module.exports = CertificateList_Model;
