var connection = require('../.././config/database');
var CertificateList_Model = connection.define('dpcertlist',{
    Id      : { type: Number,primaryKey : true},
	  CryptoObject : String,
	  NotBefore  : {type: Date , time: false},
	  NotAfter  : {type: Date , time: false},
	  ExpiresInDays : Number,
	  Subject : String,
	  Issuer : String
  },{
	  createdAt: false,
	  updatedAt :  false
  });
module.exports = CertificateList_Model;
