var connection = require('../.././config/database');
var Test = connection.define('dpm_cert_table',{
    id      : {
      type: Number,
      primaryKey : true
    },
    data   : String
  });
module.exports = Test;
