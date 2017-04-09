module.exports = function(db, callback) {
  db.define("test", {
    id      : Number,
    data   : String
  });

    return callback();
};
