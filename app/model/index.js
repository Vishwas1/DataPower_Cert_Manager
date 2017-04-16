//var orm      = require('../../../../');
var orm = require('orm');
var settings = require('../../config/settings');

var connection = null;

function setup(db, cb) {
  require('./person')(orm, db);
  require('./users')(orm, db);
  require('./test')(orm, db);

  return cb(null, db);
}

module.exports = function (cb) {
  console.log('sss');
  orm.connect(settings.database, function (err, db) {
    if (err) return cb(err);
    connection = db;
    db.settings.set('instance.returnAllErrors', true);
    setup(db, cb);
  });

}

// module.exports = function (cb) {
//   if (connection) return cb(null, connection);
//   console.log(settings.database);

//   orm.connect(settings.database, function (err, db) {
//     if (err) return cb(err);
//     connection = db;
//     db.settings.set('instance.returnAllErrors', true);
//     setup(db, cb);
//   });

// };

