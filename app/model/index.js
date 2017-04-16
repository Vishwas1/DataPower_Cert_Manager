var orm      = require('../../../../');
var settings = require('../../config/settings');

var connection = null;

function setup(db, cb) {
  require('./person')(orm, db);
  require('./users')(orm, db);
  require('./test')(orm, db);

  return cb(null, db);
}

module.exports = function (cb) {
  if (connection) return cb(null, connection);

  orm.connect(settings.database, function (err, db) {
    if (err) return cb(err);

    connection = db;
    db.settings.set('instance.returnAllErrors', true);
    setup(db, cb);
  });
};

// var gblDBObject ={};
// orm.connect("mysql://"+process.env.DB_USER+":"+process.env.DB_PASS+"@"+process.env.DB_HOST+"/"+process.env.DB_NAME,gblDBObject= function(err, db) {
//     if (err) throw err;
//     return db;

// });