var connection = require('../.././config/database');
var Test = connection.define('test',{
    id      : {
      type: Number,
      primaryKey : true
    },
    data   : String
  });
module.exports = Test;
