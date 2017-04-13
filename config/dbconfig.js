require('dotenv').load();
// var orm = require("orm");
// var connection = null;
//
// function setup(db, cb){
//  require('./app/model/test')(orm, db);
//
//  return cb(null,db);
//  // require('./routes/users');
// }
//
// module.exports = function (cb){
//
//   if(connection)  return cb(null,connection);
//
//   orm.connect("mysql://"+process.env.DB_USER+":"+process.env.DB_PASS+"@"+process.env.DB_HOST+"/"+process.env.DB_NAME, function(err,db){
//     connection = db;
//     db.setting.set('instance.returnAllErrors',true);
//     setup(db, cb);
//   });
// };


var orm = require('orm');
var db =   orm.connect("mysql://"+process.env.DB_USER+":"+process.env.DB_PASS+"@"+process.env.DB_HOST+"/"+process.env.DB_NAME);
module.exports = db;
