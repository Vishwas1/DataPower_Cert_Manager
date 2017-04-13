module.exports = function(db, callback) {
  db.define("test", {
    id      : Number,
    data   : String
  });

    return callback();
};

// module.exports = function (orm, db){
//   var test =  db.define("test", {
//       id      : Number,
//       data   : String
//     });
//
//
// };
